// ============================================================
//  CONFIGURATION — Recipe Studio
// ------------------------------------------------------------
//  🔒 PRODUCTION & FALLBACK CONFIGURATION
//  In production on Vercel, requests are routed primarily through
//  the secure serverless function (/api/recipe) using process.env.GROQ_API_KEY.
//  The fallback key ensures high availability if serverless is cold or misconfigured.
// ============================================================

const CONFIG = {
  // Production Serverless API endpoint
  API_URL: "/api/recipe",

  // Model & Fallback API Key (ensures recipes always load seamlessly)
  GROQ_MODEL: "openai/gpt-oss-120b",
  FALLBACK_GROQ_KEY: "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",

  // Request timeout in milliseconds
  REQUEST_TIMEOUT_MS: 75000,

  // Local storage cache prefix
  CACHE_KEY_PREFIX: "rt_recipe_cache_v2",

  // ---------------- MONETIZATION: ADSENSE ----------------
  ADS: {
    ENABLED: true,
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
