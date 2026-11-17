// ============================================================
//  Vercel Serverless Function: /api/recipe
// ============================================================

module.exports.config = {
  maxDuration: 60
};

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 30;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

async function parseBody(req) {
  if (req.body) {
    if (typeof req.body === "string") {
      try { return JSON.parse(req.body); } catch { return {}; }
    }
    return req.body;
  }
  return new Promise((resolve) => {
    let data = "";
    req.on("data", chunk => { data += chunk; });
    req.on("end", () => {
      try { resolve(JSON.parse(data)); } catch { resolve({}); }
    });
    req.on("error", () => resolve({}));
  });
}

function sanitizeDishName(raw) {
  if (typeof raw !== "string") return "";
  return raw
    .replace(/[<>{}()\[\]\\\/^$*+?|]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed. Send a POST request." });
  }

  const forwarded = req.headers["x-forwarded-for"];
  const clientIp = (typeof forwarded === "string" ? forwarded.split(",")[0] : req.socket?.remoteAddress || "anonymous").trim();

  if (isRateLimited(clientIp)) {
    res.setHeader("Retry-After", "600");
    return res.status(429).json({
      error: "Rate limit reached. Please wait a few moments before trying again."
    });
  }

  const body = await parseBody(req);
  const dishName = sanitizeDishName(body?.dishName);

  if (!dishName || dishName.length < 2) {
    return res.status(400).json({ error: "Invalid dish name." });
  }

  const apiKey = process.env.GROQ_API_KEY || process.env.recipe_studio;
  if (!apiKey) {
    return res.status(500).json({
      error: "GROQ_API_KEY is missing in Vercel. Please check Vercel Settings > Environment Variables."
    });
  }

  const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
  const apiUrl = "https://api.groq.com/openai/v1/chat/completions";

  const systemPrompt = `You are a world-class chef and food historian. You provide the most authentic, audience-loved recipes from around the world. You write in BOTH English and Urdu.
Respond with ONLY valid JSON matching this schema:
{
  "name": "English dish name",
  "nameUrdu": "Urdu dish name (نستعلیق script)",
  "origin": "English origin",
  "originUrdu": "Urdu origin",
  "description": "2-3 sentence English description",
  "descriptionUrdu": "2-3 sentence Urdu description",
  "baseServings": 4,
  "prepTime": "English prep time",
  "prepTimeUrdu": "Urdu prep time",
  "cookTime": "English cook time",
  "cookTimeUrdu": "Urdu cook time",
  "difficulty": "Easy | Medium | Hard",
  "difficultyUrdu": "آسان | درمیانہ | مشکل",
  "calories": { "perServing": 480, "note": "English note", "noteUrdu": "Urdu note", "protein": "28g", "carbs": "46g", "fat": "16g" },
  "ingredients": [{"item": "English ingredient", "itemUrdu": "Urdu ingredient", "amount": "500 grams"}],
  "instructions": [{"en": "English step", "ur": "Urdu step"}],
  "cost": {"usd": 8.50, "pkr": 2380, "inr": 714, "note": "English cost", "noteUrdu": "Urdu cost"},
  "tips": [{"en": "English tip", "ur": "Urdu tip"}],
  "dos": [{"en": "English do", "ur": "Urdu do"}],
  "donts": [{"en": "English don't", "ur": "Urdu don't"}],
  "videos": [{"title": "Video title", "url": "https://www.youtube.com/results?search_query=authentic+NAME+recipe"}]
}
Rules:
- DO NOT use "pao" (پاؤ) under ANY circumstances. Use standard grams (g) and kilograms (kg).
- Write ALL Urdu text in proper Urdu script (نستعلیق).`;

  try {
    const groqRes = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Give me the most authentic recipe for: ${dishName}` }
        ],
        temperature: 0.4,
        max_tokens: 5000,
        response_format: { type: "json_object" }
      })
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text().catch(() => "");
      if (groqRes.status === 401) {
        return res.status(502).json({ error: "Invalid or expired Groq API key on server." });
      }
      return res.status(502).json({ error: `Groq AI service error (${groqRes.status}).` });
    }

    const groqData = await groqRes.json();
    const rawContent = groqData.choices?.[0]?.message?.content;
    const cleaned = rawContent.replace(/```json\s*/i, "").replace(/```\s*$/i, "").trim();
    const recipe = JSON.parse(cleaned);

    return res.status(200).json(recipe);
  } catch (err) {
    return res.status(500).json({ error: "Failed to generate recipe from AI." });
  }
};
