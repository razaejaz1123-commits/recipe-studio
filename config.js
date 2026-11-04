// ============================================================
//  CONFIGURATION — Recipe Studio
// ------------------------------------------------------------
//  🔒 SECURITY NOTICE:
//  The Groq API key is NEVER exposed in client code.
//  In production on Vercel, requests are routed securely through
//  the serverless function (/api/recipe) using process.env.GROQ_API_KEY.
// ============================================================

const CONFIG = {
  // Production Serverless API endpoint
  API_URL: "/api/recipe",

  // Request timeout in milliseconds
  REQUEST_TIMEOUT_MS: 75000,

  // Local storage cache prefix
  CACHE_KEY_PREFIX: "rt_recipe_cache_v2",

  // ---------------- MONETIZATION: ADSENSE ----------------
  ADS: {
    // Set to true to show monetization placeholders; set to false to hide completely
    ENABLED: true,
    // When approved by Google AdSense, paste your Publisher ID here:
    // e.g. "ca-pub-1234567890123456"
    CLIENT_ID: "", 
    SLOTS: {
      TOP_BANNER: "1234567890",
      RECIPE_INLINE: "2345678901",
      SIDEBAR: "3456789012"
    }
  },

  // ---------------- MONETIZATION: AFFILIATE LINKS ----------------
  AFFILIATES: {
    ENABLED: true,
    // Replace with your affiliate partner ID (e.g. Amazon Associates tag)
    AMAZON_TAG: "recipestudio-20",
    DEFAULT_GEAR: [
      {
        name: "Heavy-Duty Cast Iron Kadai / Dutch Oven",
        nameUrdu: "بھاری لوہے کی کڑاہی / ڈچ اوون",
        desc: "Essential for authentic dum biryani, slow-cooked nihari, and karahi curries.",
        priceEst: "$39.99",
        link: "https://www.amazon.com/s?k=cast+iron+dutch+oven",
        icon: "🥘"
      },
      {
        name: "Electric Spice & Herb Grinder",
        nameUrdu: "الیکٹرک مصالحہ گرائنڈر",
        desc: "Grinds whole cardamom, cloves, cinnamon, and cumin into fresh aromatic garam masala in seconds.",
        priceEst: "$24.99",
        link: "https://www.amazon.com/s?k=electric+spice+grinder",
        icon: "⚡"
      },
      {
        name: "Royal Long-Grain Aged Basmati Rice",
        nameUrdu: "شاہی پرانا باسمتی چاول",
        desc: "Extra-long grain authentic Himalayan aged basmati for fragrant, fluffy biryani.",
        priceEst: "$18.50",
        link: "https://www.amazon.com/s?k=aged+basmati+rice",
        icon: "🍚"
      },
      {
        name: "8-Inch High-Carbon Chef Knife",
        nameUrdu: "پیشہ ورانہ شیف چاقو",
        desc: "Ultra-sharp precision knife for effortless meat trimming and fine vegetable julienning.",
        priceEst: "$29.95",
        link: "https://www.amazon.com/s?k=chef+knife",
        icon: "🔪"
      }
    ]
  }
};

// Fallback currency conversion (used only if AI omits a currency)
const FX = { PKR_PER_USD: 280, INR_PER_USD: 84 };
