# Recipe Studio 🍲

A high-performance, audience-loved authentic recipe platform featuring genuine dish photography, nutrition & calorie breakdowns, smart grocery shopping lists, multi-platform sharing, monetization layouts, and enterprise-grade security.

Hosted on **Vercel** with secure Serverless API Functions (`/api/recipe`).

---

## 🌟 Key Features

### 1. User Engagement & Retention
- ❤️ **Save / Bookmark Recipes:** Single-click bookmarking from the dish grid or detail view. Saved with rich metadata in `localStorage`. Includes a dedicated **Saved Recipes** tab with a live counter badge.
- 🛒 **Smart Grocery List Generator:** One-click automated grocery list generator scaled to the exact number of servings. Features interactive checkboxes, custom item addition, instant **Copy to Clipboard**, **Print Slip**, and direct **WhatsApp Sharing**.
- 📤 **WhatsApp & Multi-Platform Social Sharing:** Formatted WhatsApp text with emojis, dish details, prep/cook times, and calorie highlights. Also supports Facebook, X (Twitter), Telegram, and Native Web Share with URL deep-linking (`?recipe=DishName`).

### 2. Monetization & Analytics Preparation
- 📢 **Google AdSense Ready:** Pre-configured non-intrusive ad placeholder slots:
  - Top Leaderboard Banner (`728×90` desktop / responsive mobile)
  - In-Article Recipe Banner (between ingredients & instructions)
  - Sidebar Rectangle (`300×250`)
  - Simply paste your Publisher ID (`ca-pub-XXXXXXXX`) and slot IDs into `config.js` to go live!
- 🍳 **Affiliate Link Placeholders:** Dedicated "Chef's Recommended Kitchen Gear & Spices" section under every recipe. Ready for Amazon Associates or affiliate partner tags.

### 3. Security, Environment & Performance
- 🔒 **Zero Client-Side Key Leaks:** The Groq API key is completely removed from the frontend client code. All recipe generation is routed through the secure serverless backend endpoint: `/api/recipe`.
- 🛡️ **Backend Rate Limiting & Input Sanitization:**
  - In-memory sliding window rate limiter (30 requests / 10 minutes per IP).
  - Sanitizes user input against prompt injection and malicious script tags.
  - Strict input length limit (80 characters).
- ⚡ **Client-Side Debouncing & Cooldown:** Cooldown timers prevent duplicate requests and spamming.
- 🔍 **SEO & Rich Snippets:**
  - OpenGraph & Twitter Card tags with South Asian & global recipe keywords.
  - Dynamic Schema.org `Recipe` JSON-LD injection on every recipe view for Google rich search results.

---

## 📁 Project Architecture

```
RECIPES TREASURER/
├── api/
│   └── recipe.js          # 🔒 Vercel Serverless Function (Groq AI, Rate Limiting & Sanitization)
├── .env.example           # Environment variables template
├── vercel.json            # Security headers & Vercel deployment config
├── index.html             # Main HTML, SEO meta tags, modals & ad placeholders
├── styles.css             # Theme styles, print stylesheets, responsive layouts
├── config.js              # Frontend configuration (AdSense, Affiliates, API URLs)
├── app.js                 # Complete client application logic & state management
└── README.md              # Project documentation
```

---

## 🚀 How to Deploy on Vercel

1. **Push your code to GitHub / GitLab:**
   ```bash
   git init
   git add .
   git commit -m "feat: upgrade Recipe Studio with security, bookmarks, grocery list, and monetization"
   git remote add origin https://github.com/your-username/recipe-studio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Import your repository.
   - Under **Environment Variables**, add:
     - `GROQ_API_KEY`: Your Groq API key (get one free at [console.groq.com](https://console.groq.com))
     - `GROQ_MODEL`: `openai/gpt-oss-120b` (or `llama-3.3-70b-versatile`)
   - Click **Deploy**.

3. **Verify:**
   - Open your live Vercel URL (e.g. `https://recipe-studio.vercel.app`).
   - Click any dish card or search for a dish.
   - The recipe will generate securely via `/api/recipe` without exposing your API key!

---

## ⚙️ Configuration (`config.js`)

You can customize your monetization preferences in `config.js`:

```javascript
const CONFIG = {
  API_URL: "/api/recipe",

  // Google AdSense
  ADS: {
    ENABLED: true,           // Toggle placeholders on/off
    CLIENT_ID: "",           // e.g. "ca-pub-1234567890123456"
    SLOTS: {
      TOP_BANNER: "1234567890",
      RECIPE_INLINE: "2345678901",
      SIDEBAR: "3456789012"
    }
  },

  // Affiliate Partner
  AFFILIATES: {
    ENABLED: true,
    AMAZON_TAG: "recipestudio-20", // Your Amazon Associates tag
    DEFAULT_GEAR: [ ... ]
  }
};
```

---

Made with 🍲 for Recipe Studio.
