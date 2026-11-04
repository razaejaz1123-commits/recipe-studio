/* ============================================================
   RECIPE STUDIO — app.js (v3)
   Enhanced Features:
   - Save / Bookmark Recipes with instant state & badge
   - Smart Grocery Shopping List Generator (Print, Copy, WhatsApp)
   - WhatsApp & Multi-platform Social Sharing + Deep Linking
   - Google AdSense & Affiliate Monetization Layouts
   - Secure Serverless API (/api/recipe) + Rate Limiting & Input Sanitization
   - Dynamic SEO & Schema.org Recipe JSON-LD
   - Dish Images, EN/UR Toggle, Servings Scaler, Calorie Guide
   ============================================================ */

"use strict";

/* ---------------- I18N ---------------- */
const I18N = {
  en: {
    brandTitle: "Recipe Studio",
    brandSub: "A treasure chest of authentic recipes from around the world",
    searchPlaceholder: "Search any dish… e.g. Biryani, Ramen, Tiramisu",
    findRecipe: "🔍 Find Recipe",
    tipLine: "💡 Not sure what to cook?",
    surprise: "🎲 Surprise Me",
    favoritesTab: "❤️ Saved Recipes",
    clickHint: "Click any dish to reveal its most authentic, audience-loved recipe.",
    favoritesHint: "Your bookmarked favorite recipes live here.",
    noFavorites: "No saved recipes yet — click the heart icon on any dish to save it here.",
    servings: "Servings",
    standardNote: "Standard recipe",
    ingredients: "🧾 Ingredients",
    costTitle: "💰 Estimated Cost",
    perRecipe: "(Full Recipe)",
    instructions: "👩‍🍳 Step-by-Step Instructions",
    tips: "💡 Chef's Tips & Tricks",
    dos: "✅ Dos",
    donts: "🚫 Don'ts",
    videos: "▶️ Watch It Made",
    print: "🖨️ Print Recipe",
    download: "⬇️ Download as Text",
    saveRecipe: "☆ Save",
    savedRecipe: "★ Saved",
    groceryList: "🛒 Grocery List",
    shareRecipe: "📤 Share",
    back: "← Back to Dishes",
    authentic: "🏆 This is the most authentic, audience-loved recipe",
    fromTreasury: "from our global treasury",
    fetching: "Searching the world's kitchens for the most authentic",
    waitHint: "Crafting ingredients, nutrition & chef tips (~10–20 seconds)… 🍳",
    openVideo: "Open video guide",
    costNote: "Estimated at average grocery prices. Actual cost varies by city and season.",
    prep: "⏱️ Prep",
    cook: "🔥 Cook",
    difficulty: "📊 Difficulty",
    originLabel: "📍 Origin:",
    footerNote: "Costs are AI estimates based on average grocery prices and may vary by city. Enjoy cooking!",
    errTitle: "😕 Couldn't fetch that recipe",
    errRetry: "↻ Reload & Retry",
    downloadSuffix: "Recipe",
    calTitle: "🔥 Calorie & Nutrition Guide",
    calPerServing: "1 Standard Serving",
    calPerServingShort: "serving",
    calTotalForServings: "Total for recipe",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    calUnit: "kcal",
    groceryTitle: "🛒 Smart Grocery Shopping List",
    grocerySub: "Ingredients scaled and ready for market",
    affiliateTitle: "Chef's Recommended Kitchen Gear & Spices",
    affiliateBadge: "Partner Picks",
    checkPrice: "Check Price",
    savedSuccess: "❤️ Added to your saved recipes!",
    removedSuccess: "Removed from saved recipes",
    toastCopied: "📋 Copied to clipboard!",
    linkCopied: "🔗 Recipe link copied to clipboard!",
    searchCooldown: "Please wait a moment before searching again."
  },
  ur: {
    brandTitle: "ترکیب اسٹوڈیو",
    brandSub: "دنیا بھر کے مستند ترین اور مقبول ترین ترکیبوں کا اسٹوڈیو",
    searchPlaceholder: "کوئی بھی ڈش تلاش کریں… مثلاً بریانی، رامن، تیرامیسو",
    findRecipe: "🔍 ترکیب تلاش کریں",
    tipLine: "💡 مطمئن نہیں کہ کیا پکائیں؟",
    surprise: "🎲 حیران کن ڈش",
    favoritesTab: "❤️ محفوظ شدہ",
    clickHint: "مستند ترین ترکیب دیکھنے کے لیے کسی بھی ڈش پر کلک کریں۔",
    favoritesHint: "آپ کی محفوظ کردہ پسندیدہ ترکیبیں یہاں دیکھیں۔",
    noFavorites: "ابھی کوئی محفوظ ترکیب نہیں — کسی بھی ڈش پر دل کے نشان کو دبا کر محفوظ کریں۔",
    servings: "سرونگ",
    standardNote: "معیاری ترکیب",
    ingredients: "🧾 اجزاء",
    costTitle: "💰 تخمینی لاگت",
    perRecipe: "(مکمل ترکیب)",
    instructions: "👩‍🍳 مرحلہ وار ترکیب",
    tips: "💡 شیف کے نکات و ٹپس",
    dos: "✅ کریں",
    donts: "🚫 نہ کریں",
    videos: "▶️ ویڈیو دیکھیں",
    print: "🖨️ ترکیب پرنٹ کریں",
    download: "⬇️ ٹیکسٹ فائل ڈاؤن لوڈ کریں",
    saveRecipe: "☆ محفوظ کریں",
    savedRecipe: "★ محفوظ شدہ",
    groceryList: "🛒 خریداری لسٹ",
    shareRecipe: "📤 شیئر کریں",
    back: "← ڈشز پر واپس",
    authentic: "🏆 یہ سب سے مستند، مقبول ترین ترکیب ہے",
    fromTreasury: "ہمارے عالمی خزانہ سے",
    fetching: "دنیا کے کچن سے سب سے مستند ترکیب تلاش ہو رہی ہے",
    waitHint: "ترکیب، غذائیت اور شیف ٹپس تیار ہو رہے ہیں (10 تا 20 سیکنڈ)… 🍳",
    openVideo: "ویڈیو گائیڈ کھولیں",
    costNote: "اوسط گروسری قیمتوں کی بنیاد پر تخمینی لاگت — اصل لاگت شہر اور موسم کے حساب سے تبدیل ہو سکتی ہے۔",
    prep: "⏱️ تیاری",
    cook: "🔥 پکائیں",
    difficulty: "📊 مشکل",
    originLabel: "📍 مقام:",
    footerNote: "لاگت AI کی تخمینی ہے — اوسط گروسری قیمتوں کی بنیاد پر۔ لذیذ کھانا تیار کریں!",
    errTitle: "😕 ترکیب حاصل نہیں ہو سکی",
    errRetry: "↻ دوبارہ کوشش کریں",
    downloadSuffix: "ترکیب",
    calTitle: "🔥 کیلوریز اور غذائی رہنمائی",
    calPerServing: "معیاری ۱ سرونگ",
    calPerServingShort: "سرونگ",
    calTotalForServings: "پوری ترکیب کی مجموعی کیلوریز",
    protein: "پروٹین",
    carbs: "کاربوہائیڈریٹ",
    fat: "چکنائی",
    calUnit: "کیلوریز",
    groceryTitle: "🛒 خریداری کی سمارٹ فہرست",
    grocerySub: "مارکیٹ کے لیے حساب شدہ اجزاء",
    affiliateTitle: "شیف کے تجویز کردہ برتن و اجزاء",
    affiliateBadge: "تجویز کردہ پارٹنر",
    checkPrice: "قیمت دیکھیں",
    savedSuccess: "❤️ محفوظ شدہ ترکیبوں میں شامل کر دیا گیا!",
    removedSuccess: "محفوظ شدہ سے ہٹا دیا گیا",
    toastCopied: "📋 کلپ بورڈ پر کاپی ہو گیا!",
    linkCopied: "🔗 ترکیب کا لنک کاپی ہو گیا!",
    searchCooldown: "براہ کرم دوبارہ تلاش سے قبل چند لمحے انتظار کریں۔"
  }
};

/* ---------------- DATA: categories & dishes ---------------- */
const CATEGORIES = [
  {
    id: "south-asian", name: "South Asian", ur: "جنوبی ایشیائی", blurb: "Subcontinent classics",
    dishes: [
      { name: "Chicken Biryani", emoji: "🍚", tag: "Fragrant layered rice" },
      { name: "Butter Chicken", emoji: "🍗", tag: "Murgh Makhani" },
      { name: "Chicken Karahi", emoji: "🥘", tag: "Wok-cooked curry" },
      { name: "Nihari", emoji: "🍖", tag: "Slow-cooked stew" },
      { name: "Haleem", emoji: "🥣", tag: "Wheat & meat porridge" },
      { name: "Chana Masala", emoji: "🫘", tag: "Chickpea curry" },
      { name: "Chicken Tikka Masala", emoji: "🍢", tag: "Creamy grilled curry" },
      { name: "Rogan Josh", emoji: "🐑", tag: "Kashmiri lamb curry" },
      { name: "Palak Paneer", emoji: "🧀", tag: "Spinach & cheese" },
      { name: "Seekh Kebab", emoji: "🔥", tag: "Smoky minced skewers" }
    ]
  },
  {
    id: "east-asian", name: "East & SE Asian", ur: "مشرقی ایشیائی", blurb: "Woks & noodles",
    dishes: [
      { name: "Chicken Fried Rice", emoji: "🍳", tag: "Wok hei classic" },
      { name: "Chicken Ramen", emoji: "🍜", tag: "Rich savory broth" },
      { name: "Pad Thai", emoji: "🍤", tag: "Thai street favorite" },
      { name: "Teriyaki Chicken", emoji: "🍗", tag: "Glazed & glossy" },
      { name: "Pork Dumplings", emoji: "🥟", tag: "Steamed or pan-fried" },
      { name: "Bibimbap", emoji: "🍚", tag: "Korean mixed rice" },
      { name: "Korean Fried Chicken", emoji: "🍗", tag: "Crispy & saucy" },
      { name: "Pho Bo", emoji: "🍲", tag: "Vietnamese beef noodle soup" },
      { name: "Mapo Tofu", emoji: "🌶️", tag: "Sichuan spicy tofu" },
      { name: "Green Curry", emoji: "🥥", tag: "Thai coconut curry" }
    ]
  },
  {
    id: "desserts", name: "Desserts & Sweets", ur: "مٹھائیاں", blurb: "Sweet endings",
    dishes: [
      { name: "Gulab Jamun", emoji: "🍩", tag: "Rose-scented dumplings" },
      { name: "Rasmalai", emoji: "🥛", tag: "Saffron milk cakes" },
      { name: "Kheer", emoji: "🍚", tag: "Indian rice pudding" },
      { name: "Jalebi", emoji: "🌀", tag: "Crispy syrup spirals" },
      { name: "Tiramisu", emoji: "🍰", tag: "Italian coffee layer" },
      { name: "Baklava", emoji: "🍯", tag: "Nutty phyllo pastry" },
      { name: "Crème Brûlée", emoji: "🍮", tag: "Torched custard" },
      { name: "Chocolate Lava Cake", emoji: "🍫", tag: "Molten center" },
      { name: "Churros", emoji: "🥖", tag: "Cinnamon sugar" },
      { name: "Cheesecake", emoji: "🍰", tag: "Baked classic" }
    ]
  },
  {
    id: "baking", name: "Baking & Breads", ur: "بیکنگ", blurb: "From the oven",
    dishes: [
      { name: "Naan Bread", emoji: "🫓", tag: "Tandoor-style flatbread" },
      { name: "Croissants", emoji: "🥐", tag: "Flaky laminated layers" },
      { name: "Chocolate Chip Cookies", emoji: "🍪", tag: "Chewy & golden" },
      { name: "Focaccia", emoji: "🍞", tag: "Olive oil flatbread" },
      { name: "Banana Bread", emoji: "🍌", tag: "Moist & spiced" },
      { name: "Pizza Dough", emoji: "🍕", tag: "Neapolitan style" },
      { name: "Cinnamon Rolls", emoji: "🌀", tag: "Glazed swirls" },
      { name: "Sourdough Bread", emoji: "🥖", tag: "Tangy artisan loaf" },
      { name: "Brownies", emoji: "🍫", tag: "Fudgy & rich" },
      { name: "Garlic Bread", emoji: "🧄", tag: "Buttery & toasted" }
    ]
  },
  {
    id: "italian", name: "Italian", ur: "اطالوی", blurb: "Old-world comfort",
    dishes: [
      { name: "Spaghetti Carbonara", emoji: "🍝", tag: "Egg, pecorino & guanciale" },
      { name: "Lasagna", emoji: "🧀", tag: "Layered ragù bake" },
      { name: "Risotto", emoji: "🍚", tag: "Creamy arborio rice" },
      { name: "Margherita Pizza", emoji: "🍕", tag: "Tomato, basil & mozzarella" },
      { name: "Fettuccine Alfredo", emoji: "🍝", tag: "Parmesan cream sauce" },
      { name: "Gnocchi", emoji: "🥔", tag: "Soft potato pillows" },
      { name: "Arancini", emoji: "🍙", tag: "Fried risotto balls" },
      { name: "Pasta e Fagioli", emoji: "🍲", tag: "Pasta & bean soup" }
    ]
  },
  {
    id: "mexican", name: "Mexican", ur: "میکسیکن", blurb: "Fiesta of flavors",
    dishes: [
      { name: "Tacos Al Pastor", emoji: "🌮", tag: "Spit-grilled pork" },
      { name: "Enchiladas", emoji: "🫔", tag: "Saucy rolled tortillas" },
      { name: "Chiles Rellenos", emoji: "🌶️", tag: "Stuffed poblano peppers" },
      { name: "Guacamole", emoji: "🥑", tag: "Fresh & zesty" },
      { name: "Tamales", emoji: "🌽", tag: "Corn husk bundles" },
      { name: "Quesadillas", emoji: "🧀", tag: "Golden cheese melt" },
      { name: "Pozole", emoji: "🥣", tag: "Hominy stew" },
      { name: "Carne Asada", emoji: "🥩", tag: "Citrus-marinated beef" }
    ]
  },
  {
    id: "world", name: "World Favorites", ur: "عالمی پسندیدہ", blurb: "Global comfort food",
    dishes: [
      { name: "Shawarma", emoji: "🧆", tag: "Spiced wrap classic" },
      { name: "Moussaka", emoji: "🍆", tag: "Greek layered bake" },
      { name: "Paella", emoji: "🥘", tag: "Spanish saffron rice" },
      { name: "Moroccan Tagine", emoji: "🍋", tag: "Slow-cooked stew" },
      { name: "Banh Mi", emoji: "🥖", tag: "Vietnamese baguette" },
      { name: "Doro Wat", emoji: "🍗", tag: "Ethiopian chicken stew" },
      { name: "Beef Stroganoff", emoji: "🥩", tag: "Creamy Russian classic" },
      { name: "Jamaican Jerk Chicken", emoji: "🔥", tag: "Smoky & spicy" }
    ]
  }
];

/* ---------------- STATE ---------------- */
const state = {
  activeCategory: "south-asian",
  lang: localStorage.getItem("rt_lang") || "en",
  theme: localStorage.getItem("rt_theme") || "warm",
  currentDish: null,
  recipe: null,
  servings: null,
  baseServings: 4,
  cache: loadCache()
};

/* ---------------- DOM refs ---------------- */
const $ = (sel) => document.querySelector(sel);
const dishGrid = $("#dishGrid");
const dishView = $("#dishView");
const recipeView = $("#recipeView");
const recipeContent = $("#recipeContent");
const dishCardTpl = $("#dishCardTpl");

const t = (key) => (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;

/* ---------------- TOAST NOTIFICATIONS ---------------- */
function showToast(msg) {
  const container = $("#toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = "opacity 0.25s ease, transform 0.25s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(12px)";
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}

/* ---------------- CACHE & BOOKMARKS ---------------- */
function loadCache() {
  try {
    const raw = JSON.parse(localStorage.getItem(CONFIG.CACHE_KEY_PREFIX || "rt_recipe_cache_v2") || "{}");
    for (const key of Object.keys(raw)) {
      if (raw[key] && raw[key].data) {
        cleanRecipeData(raw[key].data);
      }
    }
    return raw;
  } catch {
    return {};
  }
}

function saveCache() {
  try {
    localStorage.setItem(CONFIG.CACHE_KEY_PREFIX || "rt_recipe_cache_v2", JSON.stringify(state.cache));
  } catch {}
}

function getFavorites() {
  try {
    const raw = JSON.parse(localStorage.getItem("rt_favorites") || "[]");
    return raw.map(item => {
      if (typeof item === "string") {
        let emoji = "🍽️", tag = "";
        for (const c of CATEGORIES) {
          const d = c.dishes.find(x => x.name === item);
          if (d) { emoji = d.emoji; tag = d.tag; break; }
        }
        return { name: item, emoji, tag, dateAdded: Date.now() };
      }
      return item;
    });
  } catch {
    return [];
  }
}

function isFavorited(dishName) {
  if (!dishName) return false;
  return getFavorites().some(f => f.name.toLowerCase() === dishName.toLowerCase());
}

function toggleFavorite(dishName, emoji = "🍽️", tag = "") {
  let favs = getFavorites();
  const index = favs.findIndex(f => f.name.toLowerCase() === dishName.toLowerCase());
  let added = false;
  if (index >= 0) {
    favs.splice(index, 1);
    showToast(t("removedSuccess"));
  } else {
    favs.unshift({ name: dishName, emoji, tag, dateAdded: Date.now() });
    added = true;
    showToast(t("savedSuccess"));
  }
  try { localStorage.setItem("rt_favorites", JSON.stringify(favs)); } catch {}
  updateFavoriteUI();
  return added;
}

function updateFavoriteUI() {
  // Update dish card buttons
  document.querySelectorAll(".card-fav-btn").forEach(btn => {
    const dish = btn.dataset.dish;
    if (dish) {
      const faved = isFavorited(dish);
      btn.textContent = faved ? "❤️" : "🤍";
      btn.classList.toggle("faved", faved);
    }
  });

  // Update recipe detail view button
  const favBtn = document.getElementById("favBtn");
  if (favBtn && state.recipe) {
    const faved = isFavorited(state.recipe.name);
    favBtn.classList.toggle("faved", faved);
    favBtn.textContent = faved ? t("savedRecipe") : t("saveRecipe");
  }

  // Update category tabs badge
  renderTabs();

  // If viewing favorites tab, refresh grid
  if (state.activeCategory === "__favorites") {
    renderDishGrid();
  }
}

function escapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* ----- clean pao and legacy obsolete units ----- */
function cleanPaoText(s) {
  if (!s) return s;
  let str = String(s);
  str = str.replace(/\s*\(\s*(?:[\d\/\.]+|half|a)?\s*pa+[ow]\s*\)/gi, "");
  str = str.replace(/\s*\(\s*(?:ایک|آدھا|۱|۲|\d+)?\s*پاؤ?\s*\)/g, "");

  str = str.replace(/(?:^|\b)(?:1\/2|0\.5|half)\s*pa+[ow]\b/gi, "125 grams");
  str = str.replace(/(?:^|\b)1\s*pa+[ow]\b/gi, "250 grams");
  str = str.replace(/(?:^|\b)2\s*pa+[ow]\b/gi, "500 grams");
  str = str.replace(/(?:^|\b)3\s*pa+[ow]\b/gi, "750 grams");
  str = str.replace(/(?:^|\b)4\s*pa+[ow]\b/gi, "1000 grams (1 kg)");
  str = str.replace(/\bpa+[ow]\b/gi, "grams");

  str = str.replace(/(?:^|\s)آدھا\s*پاؤ?\b/g, " 125 گرام");
  str = str.replace(/(?:^|\s)(?:ایک|1|۱)?\s*پاؤ?\b/g, " 250 گرام");
  str = str.replace(/(?:^|\s)(?:دو|2|۲)\s*پاؤ?\b/g, " 500 گرام");
  str = str.replace(/پاؤ?/g, "گرام");

  return str.replace(/\s+/g, " ").trim();
}

function normalizeAmount(amount) {
  if (!amount) return amount;
  let s = cleanPaoText(String(amount).trim());
  if (/\d\s*(g\b|gram|grams|ml\b|milliliter)/i.test(s)) return s;
  if (/^\d+(?:[.,\/]\d+)?(?:\s+\d+\/\d+)?\s*(?:tbsp|tablespoon|tsp|teaspoon)s?\b/i.test(s)) return s;
  if (parseQty(s) == null) return s;
  let m = s.match(/^(\d+(?:[.,]\d+)?)\s*kg/i);
  if (m) {
    const kg = parseFloat(m[1].replace(",", "."));
    const g = Math.round(kg * 1000);
    if (kg === 0.5) return "500 grams (0.5 kg)";
    if (kg === 1) return "1000 grams (1 kg)";
    return `${g} grams (${kg} kg)`;
  }
  m = s.match(/^(\d+(?:[.,]\d+)?)\s*liter/i);
  if (m) return `${Math.round(parseFloat(m[1].replace(",", ".")) * 1000)} ml`;
  m = s.match(/^(\d+(?:[.,]\d+)?)\s*cup/i);
  if (m) {
    const c = parseFloat(m[1].replace(",", "."));
    return `${Math.round(c * 240)} ml (${c} cup${c > 1 ? "s" : ""})`;
  }
  m = s.match(/^(\d+(?:[.,]\d+)?)\s*tbsp/i);
  if (m) return `${m[1]} tbsp`;
  m = s.match(/^(\d+(?:[.,]\d+)?)\s*tsp/i);
  if (m) return `${m[1]} tsp`;
  return s;
}

function convertSpoons(amount) {
  if (!amount) return amount;
  const s = cleanPaoText(String(amount).trim());
  if (/\b(?:tbsp|tsp)\b/i.test(s)) return s;
  const num = parseQty(s);
  if (num == null || num === 0) return s;
  if (!/grams?\b/i.test(s) && !/\bml\b/i.test(s)) return s;
  if (num > 30) return s;

  const g = num;
  const tspSize = 5;
  const tbspSize = 15;

  let result = null;
  const tbsp = Math.floor(g / tbspSize);
  const remainder = g % tbspSize;
  const tsp = Math.round(remainder / tspSize);

  if (tbsp > 0 && tsp > 0) {
    result = `${tbsp} tbsp + ${tsp} tsp`;
  } else if (tbsp > 0) {
    result = `${tbsp} tbsp`;
  } else if (tsp > 0) {
    result = `${tsp} tsp`;
  } else {
    return s;
  }

  return `${result} (${g} grams)`;
}

function getRecipeCalories(d) {
  if (!d) return { perServing: 450, note: "", noteUrdu: "", protein: "20g", carbs: "45g", fat: "16g" };
  const c = d.calories;
  if (typeof c === "number" && !isNaN(c)) {
    return {
      perServing: Math.round(c),
      note: `Estimated ~${Math.round(c)} kcal per standard serving.`,
      noteUrdu: `معیاری ایک سرونگ میں تقریباً ${Math.round(c)} کیلوریز۔`,
      protein: "24g", carbs: "48g", fat: "16g"
    };
  }
  if (c && typeof c.perServing === "number" && !isNaN(c.perServing)) {
    return {
      perServing: Math.round(c.perServing),
      note: c.note || `Estimated ~${Math.round(c.perServing)} kcal per standard serving.`,
      noteUrdu: c.noteUrdu || `معیاری ایک سرونگ میں تقریباً ${Math.round(c.perServing)} کیلوریز۔`,
      protein: c.protein || c.macros?.protein || "24g",
      carbs: c.carbs || c.macros?.carbs || "48g",
      fat: c.fat || c.macros?.fat || "16g"
    };
  }
  const name = (d.name || "").toLowerCase();
  let est = 450;
  let p = "22g", cb = "48g", f = "16g";
  if (/salad|soup|raita/i.test(name)) { est = 220; p = "8g"; cb = "18g"; f = "7g"; }
  else if (/biryani|pulao|rice|risotto|paella/i.test(name)) { est = 540; p = "28g"; cb = "65g"; f = "18g"; }
  else if (/cake|lava|tiramisu|gulab|sweet|dessert|brownie|cookie|churro|baklava|kheer|rasmalai/i.test(name)) { est = 390; p = "6g"; cb = "55g"; f = "18g"; }
  else if (/burger|pizza|fried/i.test(name)) { est = 620; p = "32g"; cb = "58g"; f = "28g"; }
  else if (/roti|naan|bread|focaccia|croissant/i.test(name)) { est = 270; p = "8g"; cb = "44g"; f = "6g"; }
  else if (/karahi|curry|butter chicken|korma|nihari|haleem|rogan josh/i.test(name)) { est = 490; p = "34g"; cb = "18g"; f = "26g"; }
  else if (/pasta|spaghetti|carbonara|lasagna/i.test(name)) { est = 520; p = "22g"; cb = "62g"; f = "20g"; }
  else if (/taco|enchilada|quesadilla/i.test(name)) { est = 460; p = "24g"; cb = "42g"; f = "20g"; }

  return {
    perServing: est,
    note: `Estimated ~${est} kcal per standard 1 serving. Nutritious and satisfying.`,
    noteUrdu: `معیاری ایک سرونگ میں تقریباً ${est} کیلوریز۔ غذائیت بخش اور متوازن۔`,
    protein: p, carbs: cb, fat: f
  };
}

function cleanRecipeData(data) {
  if (!data) return;
  if (Array.isArray(data.ingredients)) {
    data.ingredients.forEach(i => {
      if (i.amount) i.amount = convertSpoons(normalizeAmount(cleanPaoText(i.amount)));
      if (i.item) i.item = cleanPaoText(i.item);
      if (i.itemUrdu) i.itemUrdu = cleanPaoText(i.itemUrdu);
    });
  }
  if (Array.isArray(data.instructions)) {
    data.instructions.forEach(step => {
      if (step.en) step.en = cleanPaoText(step.en);
      if (step.ur) step.ur = cleanPaoText(step.ur);
    });
  }
  if (data.description) data.description = cleanPaoText(data.description);
  if (data.descriptionUrdu) data.descriptionUrdu = cleanPaoText(data.descriptionUrdu);

  if (!data.calories || typeof data.calories !== "object") {
    data.calories = getRecipeCalories(data);
  }
}

const URDU_DIGITS = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
function toUrduDigits(s) {
  return String(s).replace(/\d/g, d => URDU_DIGITS[d]);
}
function localizeDigits(s) {
  return state.lang === "ur" ? toUrduDigits(s) : String(s);
}

function parseQty(str) {
  if (str == null) return null;
  const s = String(str).trim();
  let m = s.match(/^(\d+)\s+(\d+)\/(\d+)/);
  if (m) return parseInt(m[1], 10) + parseInt(m[2], 10) / parseInt(m[3], 10);
  m = s.match(/^(\d+)\/(\d+)/);
  if (m) return parseInt(m[1], 10) / parseInt(m[2], 10);
  m = s.match(/^(\d+(?:[.,]\d+)?)/);
  if (m) return parseFloat(m[1].replace(",", "."));
  return null;
}

const FRAC_MAP = { 0.25: "1/4", 0.33: "1/3", 0.5: "1/2", 0.66: "2/3", 0.75: "3/4" };
function fmtQty(n) {
  if (n == null || isNaN(n)) return "";
  const r = Math.round(n * 1000) / 1000;
  if (Number.isInteger(r)) return String(r);
  const whole = Math.floor(r);
  const frac = Math.round((r - whole) * 100) / 100;
  let fs = FRAC_MAP[frac];
  if (!fs) {
    const q = Math.round(frac * 4) / 4;
    fs = FRAC_MAP[q];
  }
  if (fs) return (whole > 0 ? whole + " " : "") + fs;
  const rounded = Math.round(r * 10) / 10;
  return String(rounded);
}

function formatAmount(rawAmount, multiplier) {
  const num = parseQty(rawAmount);
  if (num == null) return String(rawAmount);
  const scaled = fmtQty(num * multiplier);
  const s = String(rawAmount).trim();
  const numMatch = s.match(/^[\d\s\/.,]+/);
  const unit = numMatch ? s.slice(numMatch[0].length).trim() : "";
  if (unit) return scaled + " " + unit;
  return scaled;
}

function fmtMoney(value, currency) {
  if (value == null || isNaN(value)) return "—";
  const n = Number(value);
  if (currency === "usd") return "$" + n.toFixed(2);
  const rounded = Math.round(n).toLocaleString("en-IN");
  if (currency === "pkr") return "₨ " + rounded;
  if (currency === "inr") return "₹ " + rounded;
  return String(n);
}

function fmtMoneyLocalized(value, currency) {
  return fmtMoney(value, currency);
}

/* ---------------- THEME & LANGUAGE ---------------- */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  document.querySelectorAll(".theme-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.theme === state.theme);
  });
}

function applyLang() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ur" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === state.lang);
  });
  renderTabs();
  if (state.currentDish && state.recipe) {
    renderRecipe();
  }
}

function setLang(lang) {
  state.lang = lang;
  try { localStorage.setItem("rt_lang", lang); } catch {}
  applyLang();
}

function setTheme(theme) {
  state.theme = theme;
  try { localStorage.setItem("rt_theme", theme); } catch {}
  applyTheme();
}

/* ---------------- FLOATING FOOD DECOR ---------------- */
function initFoodFloat() {
  const wrap = $("#foodFloat");
  const emojis = ["🍕","🍔","🍜","🍰","🥐","🌮","🍩","🥑","🍓","🥞","🍤","🥗","🍪","🧀","🍇"];
  const count = 14;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.left = Math.random() * 96 + "vw";
    s.style.fontSize = (22 + Math.random() * 26) + "px";
    s.style.animationDuration = (24 + Math.random() * 30) + "s";
    s.style.animationDelay = (-Math.random() * 40) + "s";
    wrap.appendChild(s);
  }
}

/* ---------------- CATEGORY TABS ---------------- */
function renderTabs() {
  const wrap = $("#categoryTabs");
  wrap.innerHTML = "";

  const favs = getFavorites();
  const favTab = document.createElement("button");
  favTab.className = "cat-tab" + (state.activeCategory === "__favorites" ? " active" : "");
  favTab.innerHTML = `${escapeHtml(t("favoritesTab"))}${favs.length > 0 ? `<span class="cat-badge">${favs.length}</span>` : ""}`;
  favTab.addEventListener("click", () => {
    state.activeCategory = "__favorites";
    state.currentDish = null;
    state.recipe = null;
    recipeView.classList.add("hidden");
    dishView.classList.remove("hidden");
    updateBrowserUrl(null);
    renderTabs();
    renderDishGrid();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  wrap.appendChild(favTab);

  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-tab" + (cat.id === state.activeCategory ? " active" : "");
    const label = state.lang === "ur" ? cat.ur : cat.name;
    btn.textContent = label;
    btn.addEventListener("click", () => {
      state.activeCategory = cat.id;
      state.currentDish = null;
      state.recipe = null;
      recipeView.classList.add("hidden");
      dishView.classList.remove("hidden");
      updateBrowserUrl(null);
      renderTabs();
      renderDishGrid();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    wrap.appendChild(btn);
  });
}

/* ---------------- DISH GRID ---------------- */
function renderDishGrid() {
  dishGrid.innerHTML = "";

  if (state.activeCategory === "__favorites") {
    const favs = getFavorites();
    $("#dishViewTitle").textContent = t("favoritesTab");
    $("#dishViewSub").textContent = t("favoritesHint");
    if (favs.length === 0) {
      dishGrid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;color:var(--ink-soft);padding:60px 20px;">
          <p style="font-size:48px;margin-bottom:12px;">❤️</p>
          <p style="font-size:16px;font-weight:600;margin-bottom:8px;">${escapeHtml(t("noFavorites"))}</p>
          <button class="btn btn-primary" id="exploreDishesBtn" style="margin-top:14px;">🍽️ Browse Dishes</button>
        </div>`;
      const expBtn = $("#exploreDishesBtn");
      if (expBtn) {
        expBtn.addEventListener("click", () => {
          state.activeCategory = "south-asian";
          renderTabs();
          renderDishGrid();
        });
      }
      return;
    }
    favs.forEach(item => {
      dishGrid.appendChild(makeCard(item.name, item.emoji || "🍽️", item.tag || "Saved recipe"));
    });
    return;
  }

  const cat = CATEGORIES.find(c => c.id === state.activeCategory);
  if (!cat) return;
  $("#dishViewTitle").textContent = state.lang === "ur" ? cat.ur : cat.name + " Favorites";
  $("#dishViewSub").textContent = cat.blurb + " — " + t("clickHint");

  cat.dishes.forEach(dish => {
    dishGrid.appendChild(makeCard(dish.name, dish.emoji, dish.tag));
  });
}

/* ---------------- DISH PHOTOGRAPHY ---------------- */
const DISH_IMAGES = {
  "Chicken Biryani": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/330px-%22Hyderabadi_Dum_Biryani%22.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Butter Chicken": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/330px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Chicken Karahi": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Punjabi_Chicken_Karahi.JPG/330px-Punjabi_Chicken_Karahi.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Nihari": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Nalli_Nihari_India.jpg/330px-Nalli_Nihari_India.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Haleem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Pakistani_Haleem_served_with_garnish.jpg/330px-Pakistani_Haleem_served_with_garnish.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Chana Masala": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Chana_masala.jpg/330px-Chana_masala.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Chicken Tikka Masala": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Chicken_tikka_masala_%28cropped%29.jpg/330px-Chicken_tikka_masala_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Rogan Josh": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Rogan_Josh_Kashmiri.jpg/330px-Rogan_Josh_Kashmiri.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Palak Paneer": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Palakpaneer_Rayagada_Odisha_0009.jpg/330px-Palakpaneer_Rayagada_Odisha_0009.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Seekh Kebab": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Pakistani_Food_Beef_Kabobs.jpg/330px-Pakistani_Food_Beef_Kabobs.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Chicken Fried Rice": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Koh_Mak%2C_Thailand%2C_Fried_rice_with_seafood%2C_Thai_fried_rice.jpg/330px-Koh_Mak%2C_Thailand%2C_Fried_rice_with_seafood%2C_Thai_fried_rice.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Chicken Ramen": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg/330px-Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Pad Thai": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/330px-Phat_Thai_kung_Chang_Khien_street_stall.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Teriyaki Chicken": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/22nd_June_2012_Teriyaki_Duck.jpg/330px-22nd_June_2012_Teriyaki_Duck.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Pork Dumplings": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/%E5%8F%B0%E7%81%A3%E5%8D%97%E6%8A%95%E8%8D%89%E5%B1%AF%E6%B0%B4%E9%A4%83Nantou%2C_Taiwan_Caotun_dumplings.jpg/330px-%E5%8F%B0%E7%81%A3%E5%8D%97%E6%8A%95%E8%8D%89%E5%B1%AF%E6%B0%B4%E9%A4%83Nantou%2C_Taiwan_Caotun_dumplings.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Bibimbap": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/330px-Dolsot-bibimbap.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "Korean Fried Chicken": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Iksan_City_48_Korean_Style_Fried_chicken.jpg/330px-Iksan_City_48_Korean_Style_Fried_chicken.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
};

function loadDishImage(img, dishName, w, h) {
  if (!dishName) return;
  if (DISH_IMAGES[dishName]) {
    img.src = DISH_IMAGES[dishName];
    return;
  }
  const lower = dishName.toLowerCase().trim();
  for (const [k, url] of Object.entries(DISH_IMAGES)) {
    if (k.toLowerCase() === lower || lower.includes(k.toLowerCase()) || k.toLowerCase().includes(lower)) {
      img.src = url;
      return;
    }
  }

  const cleanTitle = dishName.trim().replace(/\s+/g, "_");
  const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTitle)}`;
  fetch(wikiUrl)
    .then(r => (r.ok ? r.json() : null))
    .then(data => {
      if (data && data.thumbnail && data.thumbnail.source) {
        DISH_IMAGES[dishName] = data.thumbnail.source;
        img.src = data.thumbnail.source;
      } else {
        img.remove();
      }
    })
    .catch(() => img.remove());
}

/* ---------------- DISH CARDS & QUICK ACTIONS ---------------- */
function makeCard(name, emoji, tag) {
  const node = dishCardTpl.content.cloneNode(true);
  const wrap = node.querySelector(".dish-card-wrap");
  const card = node.querySelector(".dish-card");
  const img = node.querySelector(".card-img");
  img.alt = name;
  loadDishImage(img, name, 400, 300);
  node.querySelector(".dish-emoji").textContent = emoji;
  node.querySelector(".dish-name").textContent = name;
  node.querySelector(".dish-tag").textContent = tag || "";

  card.addEventListener("click", () => openRecipe(name, emoji));

  // Quick Action: Bookmark button
  const favBtn = node.querySelector(".card-fav-btn");
  const faved = isFavorited(name);
  favBtn.textContent = faved ? "❤️" : "🤍";
  favBtn.classList.toggle("faved", faved);
  favBtn.dataset.dish = name;
  favBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const nowFaved = toggleFavorite(name, emoji, tag);
    favBtn.textContent = nowFaved ? "❤️" : "🤍";
    favBtn.classList.toggle("faved", nowFaved);
  });

  // Quick Action: Share button
  const shareBtn = node.querySelector(".card-share-btn");
  shareBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openShareModal(name, emoji);
  });

  return wrap;
}

/* ---------------- URL ROUTING / DEEP LINKING ---------------- */
function updateBrowserUrl(dishName) {
  try {
    const url = new URL(window.location.href);
    if (dishName) {
      url.searchParams.set("recipe", dishName);
    } else {
      url.searchParams.delete("recipe");
    }
    window.history.replaceState({ dish: dishName }, "", url.toString());
  } catch {}
}

/* ---------------- RECIPE FLOW ---------------- */
async function openRecipe(dishName, emoji) {
  dishView.classList.add("hidden");
  recipeView.classList.remove("hidden");
  state.currentDish = { name: dishName, emoji };
  state.recipe = null;

  updateBrowserUrl(dishName);

  const cached = state.cache[dishName];
  if (cached && cached.data) {
    cleanRecipeData(cached.data);
    state.recipe = cached.data;
    state.baseServings = cached.data.baseServings || 4;
    state.servings = state.baseServings;
    renderRecipe();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  recipeContent.innerHTML = `
    <div class="spinner-wrap">
      <div class="spinner"></div>
      <p>${escapeHtml(t("fetching"))} <strong>${escapeHtml(dishName)}</strong>…</p>
      <p style="font-size:13.5px;margin-top:6px;">${escapeHtml(t("waitHint"))}</p>
    </div>`;

  try {
    const data = await fetchRecipe(dishName);
    state.cache[dishName] = { data, ts: Date.now() };
    saveCache();
    state.recipe = data;
    state.baseServings = data.baseServings || 4;
    state.servings = state.baseServings;
    renderRecipe();
  } catch (err) {
    console.error(err);
    recipeContent.innerHTML = `
      <div class="error-box no-print">
        <h3>${escapeHtml(t("errTitle"))}</h3>
        <p style="margin:12px 0 16px;line-height:1.5;">${escapeHtml(err.message || "Something went wrong. Please try again.")}</p>
        <button class="btn btn-primary" onclick="location.reload()">${escapeHtml(t("errRetry"))}</button>
      </div>`;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------------- SECURE BACKEND API CALL & DIRECT FALLBACK ---------------- */
const GROQ_SYSTEM_PROMPT = `You are a world-class chef and food historian. You provide the most authentic, audience-loved recipes from around the world. You write in BOTH English and Urdu.
Respond with ONLY valid JSON (no markdown, no explanation, no code fences) matching this exact schema:
{
  "name": "English dish name",
  "nameUrdu": "Urdu dish name (نستعلیق script)",
  "origin": "English origin e.g. Hyderabad, India",
  "originUrdu": "Urdu origin",
  "description": "2-3 sentence mouth-watering English description",
  "descriptionUrdu": "2-3 sentence mouth-watering Urdu description",
  "baseServings": 4,
  "prepTime": "English e.g. 30 minutes",
  "prepTimeUrdu": "Urdu e.g. 30 منٹ",
  "cookTime": "English e.g. 45 minutes",
  "cookTimeUrdu": "Urdu e.g. 45 منٹ",
  "difficulty": "Easy | Medium | Hard",
  "difficultyUrdu": "آسان | درمیانہ | مشکل",
  "calories": {
    "perServing": 480,
    "note": "Approx. 480 kcal per standard 1 serving. Nutritious and balanced.",
    "noteUrdu": "معیاری ایک سرونگ میں تقریباً 480 کیلوریز۔ متوازن اور غذائیت سے بھرپور۔",
    "protein": "28g",
    "carbs": "46g",
    "fat": "16g"
  },
  "ingredients": [{"item": "English ingredient", "itemUrdu": "Urdu ingredient", "amount": "1 kg"}],
  "instructions": [{"en": "English step", "ur": "Urdu step"}],
  "cost": {"usd": 8.50, "pkr": 2380, "inr": 714, "note": "English cost note", "noteUrdu": "Urdu cost note"},
  "tips": [{"en": "English tip", "ur": "Urdu tip"}],
  "dos": [{"en": "English do", "ur": "Urdu do"}],
  "donts": [{"en": "English don't", "ur": "Urdu don't"}],
  "videos": [{"title": "short descriptive English video title", "url": "https://www.youtube.com/results?search_query=..."}]
}
Rules:
- baseServings must be a NUMBER (the standard recipe yield, e.g. 4).
- calories: provide realistic nutritional guidance for ONE standard/average serving of the dish.
  - "perServing" MUST be an integer number of calories (kcal), e.g. 480.
  - "note" and "noteUrdu": 1-2 sentence dietary guidance about the calorie content of 1 standard serving.
  - "protein", "carbs", "fat": estimated macronutrients per standard serving in grams (e.g. "28g", "46g", "16g").
- MEASUREMENTS - STRICT UNITS REQUIREMENT:
  - DO NOT use the measuring unit "pao" (پاؤ) or "paao" under ANY circumstances. Never mention "pao".
  - Use ONLY standard measurements in grams (g) and kilograms (kg) for solids:
    - e.g. "250 grams" (NEVER "1 pao"), "500 grams (0.5 kg)", "1000 grams (1 kg)", "750 grams".
  - Use tablespoons (tbsp) or teaspoons (tsp) where necessary for spices, seasonings, pastes, and cooking oils:
    - e.g. "1 tbsp", "2 tbsp", "1 tsp", "1/2 tsp".
  - Liquids: use milliliters (ml) and liters (L), or cups where helpful:
    - e.g. "240 ml (1 cup)", "500 ml", "1 liter".
  - Small pinches/garnishes: "a pinch", "to taste", "2 cloves", "1 bay leaf".
- Amounts must start with the numeric quantity as the first thing so they can be scaled (e.g. "500 grams", "2 tbsp", "1 tsp").
- cost: estimate total ingredient cost for baseServings. Use 1 USD ≈ 280 PKR ≈ 84 INR.
- videos: provide 2-3 YouTube search URLs in format https://www.youtube.com/results?search_query=authentic+NAME+recipe (replace NAME). Do NOT invent direct video IDs.
- Write ALL Urdu text in proper Urdu (نستعلیق), not transliteration.`;

async function fetchDirectGroq(dishName, apiKey) {
  const userPrompt = `Give me the most authentic, best-reviewed recipe for: ${dishName}`;
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: CONFIG.GROQ_MODEL || "openai/gpt-oss-120b",
      messages: [
        { role: "system", content: GROQ_SYSTEM_PROMPT },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.4,
      max_tokens: 5000,
      response_format: { type: "json_object" }
    })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Groq API returned ${res.status}: ${body.slice(0, 120)}`);
  }

  const json = await res.json();
  const raw = json.choices?.[0]?.message?.content;
  if (!raw) throw new Error("Empty response from AI.");
  const cleaned = raw.replace(/```json\s*/i, "").replace(/```\s*$/i, "").trim();
  const data = JSON.parse(cleaned);
  cleanRecipeData(data);
  return data;
}

async function fetchRecipe(dishName) {
  // Input sanitization
  const cleanName = String(dishName || "")
    .replace(/[<>{}()\[\]\\\/^$*+?|]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);

  if (!cleanName || cleanName.length < 2) {
    throw new Error("Please enter a valid recipe name (at least 2 characters).");
  }

  // 1. In production on Vercel, try the secure /api/recipe serverless backend
  if (window.location.protocol !== "file:") {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), CONFIG.REQUEST_TIMEOUT_MS || 75000);

      const res = await fetch(CONFIG.API_URL || "/api/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dishName: cleanName }),
        signal: controller.signal
      }).finally(() => clearTimeout(timeout));

      if (res.ok) {
        const data = await res.json();
        if (data && data.name && Array.isArray(data.ingredients) && Array.isArray(data.instructions)) {
          cleanRecipeData(data);
          return data;
        }
      } else {
        console.warn(`/api/recipe responded with HTTP ${res.status}`);
      }
    } catch (apiErr) {
      console.warn("Serverless backend request failed, trying fallback:", apiErr);
    }
  }

  // 2. High-Availability Fallback: Direct Groq query (guarantees recipes ALWAYS load seamlessly)
  if (CONFIG.FALLBACK_GROQ_KEY) {
    try {
      return await fetchDirectGroq(cleanName, CONFIG.FALLBACK_GROQ_KEY);
    } catch (fallbackErr) {
      console.error("Direct fallback failed:", fallbackErr);
      throw new Error(fallbackErr.message || "Failed to generate recipe from AI.");
    }
  }

  throw new Error("Could not connect to the recipe server. Please check your internet connection and Vercel configuration.");
}

/* ---------------- SCHEMA.ORG RECIPE SEO INJECTION ---------------- */
function injectRecipeSchema(data) {
  let script = document.getElementById("recipeSchema");
  if (!script) {
    script = document.createElement("script");
    script.id = "recipeSchema";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  const mult = state.servings / (data.baseServings || 4);
  const cal = getRecipeCalories(data);
  const img = DISH_IMAGES[data.name] || "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1200&h=630&fit=crop";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": data.name,
    "alternateName": data.nameUrdu || undefined,
    "image": [img],
    "description": data.description || `Authentic ${data.name} recipe`,
    "recipeYield": `${state.servings} servings`,
    "recipeCategory": "Main Course",
    "recipeCuisine": data.origin || "Global",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": `${cal.perServing} calories`,
      "proteinContent": cal.protein || undefined,
      "carbohydrateContent": cal.carbs || undefined,
      "fatContent": cal.fat || undefined
    },
    "recipeIngredient": (data.ingredients || []).map(i => `${formatAmount(i.amount, mult)} ${i.item}`.trim()),
    "recipeInstructions": (data.instructions || []).map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "text": step.en || step.ur || ""
    }))
  };

  script.textContent = JSON.stringify(schema, null, 2);
}

/* ---------------- AFFILIATE SECTION BUILDER ---------------- */
function renderAffiliateSection() {
  if (!CONFIG.AFFILIATES || !CONFIG.AFFILIATES.ENABLED) return "";
  const gear = CONFIG.AFFILIATES.DEFAULT_GEAR || [];
  const ur = state.lang === "ur";
  const tag = CONFIG.AFFILIATES.AMAZON_TAG || "recipestudio-20";

  const cardsHtml = gear.map(item => {
    const title = ur ? (item.nameUrdu || item.name) : item.name;
    const url = `${item.link}${item.link.includes("?") ? "&" : "?"}tag=${encodeURIComponent(tag)}`;
    return `
      <div class="affiliate-card">
        <div class="affiliate-icon">${escapeHtml(item.icon || "🔪")}</div>
        <div class="affiliate-title">${escapeHtml(title)}</div>
        <p class="affiliate-desc">${escapeHtml(item.desc)}</p>
        <div class="affiliate-footer">
          <span class="affiliate-price">${escapeHtml(item.priceEst || "")}</span>
          <a class="affiliate-btn" href="${escapeHtml(url)}" target="_blank" rel="sponsored nofollow noopener">
            ${escapeHtml(t("checkPrice"))} ↗
          </a>
        </div>
      </div>`;
  }).join("");

  return `
    <section class="affiliate-section no-print" aria-label="Recommended kitchen gear">
      <div class="affiliate-header">
        <h3>🍳 ${escapeHtml(t("affiliateTitle"))}</h3>
        <span class="affiliate-badge">${escapeHtml(t("affiliateBadge"))}</span>
      </div>
      <div class="affiliate-grid">${cardsHtml}</div>
    </section>`;
}

/* ---------------- RENDER RECIPE ---------------- */
function renderRecipe() {
  const d = state.recipe;
  if (!d) return;
  const ur = state.lang === "ur";
  const mult = state.servings / state.baseServings;
  const T = t;
  const cal = getRecipeCalories(d);

  const faved = isFavorited(d.name);
  const namePrimary = ur ? (d.nameUrdu || d.name) : d.name;
  const nameSecondary = ur ? d.name : (d.nameUrdu || "");
  const origin = ur ? (d.originUrdu || d.origin || "") : (d.origin || "");
  const desc = ur ? (d.descriptionUrdu || d.description || "") : (d.description || "");
  const prep = ur ? (d.prepTimeUrdu || d.prepTime || "—") : (d.prepTime || "—");
  const cook = ur ? (d.cookTimeUrdu || d.cookTime || "—") : (d.cookTime || "—");
  const diff = ur ? (d.difficultyUrdu || d.difficulty || "—") : (d.difficulty || "—");

  // Dynamic SEO Page Title & OpenGraph
  document.title = `${namePrimary} Recipe — Authentic & Easy | Recipe Studio`;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = `${namePrimary} Recipe — Authentic & Easy | Recipe Studio`;
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = desc || `Authentic ${namePrimary} recipe with nutrition guide & grocery list.`;

  // Inject Schema.org structured data for Google Rich Recipes
  injectRecipeSchema(d);

  // Scalable Ingredients
  const ingRows = (d.ingredients || []).map(i => {
    const item = ur ? (i.itemUrdu || i.item || "") : (i.item || "");
    const scaled = formatAmount(i.amount, mult);
    return `<li data-raw="${escapeHtml(i.amount || "")}">
      <span class="amount">${escapeHtml(scaled)}</span>
      <span>${escapeHtml(item)}</span>
    </li>`;
  }).join("");

  const steps = (d.instructions || []).map(s => {
    const txt = ur ? (s.ur || s.en || "") : (s.en || s.ur || "");
    return `<li>${escapeHtml(txt)}</li>`;
  }).join("");

  const tips = (d.tips || []).map(x => `<li>${escapeHtml(ur ? (x.ur || x.en) : (x.en || x.ur))}</li>`).join("");
  const dos = (d.dos || []).map(x => `<li>${escapeHtml(ur ? (x.ur || x.en) : (x.en || x.ur))}</li>`).join("");
  const donts = (d.donts || []).map(x => `<li>${escapeHtml(ur ? (x.ur || x.en) : (x.en || x.ur))}</li>`).join("");

  const videos = (d.videos || []).map(v => `
    <a class="video-link" href="${escapeHtml(v.url || "#")}" target="_blank" rel="noopener">
      <span class="yt">▶️</span>
      <span>${escapeHtml(v.title || "Video")}<small>${escapeHtml(T("openVideo"))}</small></span>
    </a>`).join("");

  recipeContent.innerHTML = `
    <!-- Hero -->
    <div class="recipe-hero">
      <img class="hero-bg-img" id="heroBgImg" alt="" loading="lazy" />
      <div class="hero-inner">
        <div class="hero-content">
          <span class="hero-emoji steam">${escapeHtml(d.emoji || state.currentDish?.emoji || "🍽️")}</span>
          <h2>${escapeHtml(namePrimary)}</h2>
          ${nameSecondary ? `<div class="hero-name-alt">${escapeHtml(nameSecondary)}</div>` : ""}
          ${origin ? `<span class="hero-origin">${escapeHtml(T("originLabel"))} ${escapeHtml(origin)}</span>` : ""}
          <p class="hero-desc">${escapeHtml(desc)}</p>
          <div class="hero-meta">
            <span class="hero-chip">${escapeHtml(T("prep"))}: ${escapeHtml(prep)}</span>
            <span class="hero-chip">${escapeHtml(T("cook"))}: ${escapeHtml(cook)}</span>
            <span class="hero-chip" id="heroServChip">🍽️ ${escapeHtml(localizeDigits(state.servings))} ${escapeHtml(T("servings"))}</span>
            <span class="hero-chip">${escapeHtml(T("difficulty"))}: ${escapeHtml(diff)}</span>
            <span class="hero-chip hero-chip-cal">🔥 ${escapeHtml(localizeDigits(cal.perServing))} ${escapeHtml(T("calUnit"))} / ${escapeHtml(T("calPerServingShort"))}</span>
          </div>
        </div>
        <div class="hero-photo-wrap">
          <img class="hero-photo" id="heroPhoto" alt="${escapeHtml(namePrimary)}" />
        </div>
      </div>
    </div>

    <div class="recipe-badge">🏆 ${escapeHtml(T("authentic"))} ${escapeHtml(d.name)} ${escapeHtml(T("fromTreasury"))}</div>

    <!-- Action bar -->
    <div class="recipe-actions no-print">
      <button class="btn btn-primary" id="printBtn">${escapeHtml(T("print"))}</button>
      <button class="btn btn-outline" id="downloadBtn">${escapeHtml(T("download"))}</button>
      <button class="btn btn-secondary" id="groceryBtn">${escapeHtml(T("groceryList"))}</button>
      <button class="btn btn-outline fav-btn ${faved ? "faved" : ""}" id="favBtn">${faved ? escapeHtml(T("savedRecipe")) : escapeHtml(T("saveRecipe"))}</button>
      <button class="btn btn-outline" id="shareBtn">${escapeHtml(T("shareRecipe"))}</button>
      <button class="btn btn-outline" id="backBtn">${escapeHtml(T("back"))}</button>
    </div>

    <!-- Videos -->
    ${videos ? `
    <div class="panel">
      <h3>${escapeHtml(T("videos"))}</h3>
      <div class="video-list">${videos}</div>
    </div>` : ""}

    <div class="recipe-cols">
      <!-- Ingredients with servings scaler -->
      <div class="panel">
        <h3>${escapeHtml(T("ingredients"))}</h3>
        <div class="servings-bar no-print">
          <span class="sb-label">${escapeHtml(T("servings"))}</span>
          <div class="servings-ctrl">
            <button id="servMinus" aria-label="minus">−</button>
            <span class="servings-val" id="servingsVal">${escapeHtml(localizeDigits(state.servings))}</span>
            <button id="servPlus" aria-label="plus">+</button>
          </div>
          <span class="servings-note">${escapeHtml(T("standardNote"))}: ${escapeHtml(localizeDigits(state.baseServings))} · ×${escapeHtml(fmtQty(mult))}</span>
        </div>
        <ul class="ingredients-list" id="ingList">${ingRows || "<li>—</li>"}</ul>
      </div>

      <!-- Right Column: Cost + Nutrition/Calories Guide + Sidebar Ad Placeholder -->
      <div class="recipe-side-col">
        <!-- Cost -->
        <div class="panel">
          <h3>${escapeHtml(T("costTitle"))} <small style="font-size:13px;color:var(--ink-soft);font-weight:400;">${escapeHtml(T("perRecipe"))}</small></h3>
          <div class="cost-grid">
            <div class="cost-row"><span class="currency">🇺🇸 US Dollar</span><span class="value" id="costUSD">${escapeHtml(fmtMoneyLocalized((d.cost?.usd || 0) * mult, "usd"))}</span></div>
            <div class="cost-row"><span class="currency">🇵🇰 Pakistani Rupee</span><span class="value" id="costPKR">${escapeHtml(fmtMoneyLocalized((d.cost?.pkr || 0) * mult, "pkr"))}</span></div>
            <div class="cost-row"><span class="currency">🇮🇳 Indian Rupee</span><span class="value" id="costINR">${escapeHtml(fmtMoneyLocalized((d.cost?.inr || 0) * mult, "inr"))}</span></div>
          </div>
          <p class="cost-note">${escapeHtml(ur ? (d.cost?.noteUrdu || d.cost?.note || T("costNote")) : (d.cost?.note || T("costNote")))}</p>
        </div>

        <!-- Calorie & Nutrition Guide -->
        <div class="panel stack">
          <h3>${escapeHtml(T("calTitle"))}</h3>
          <div class="cal-card">
            <div class="cal-main">
              <span class="cal-icon">🔥</span>
              <div>
                <div class="cal-num">${escapeHtml(localizeDigits(cal.perServing))} <span class="cal-unit">${escapeHtml(T("calUnit"))}</span></div>
                <div class="cal-sub">${escapeHtml(T("calPerServing"))}</div>
              </div>
            </div>
            <div class="cal-total-box">
              <span class="cal-total-label" id="calTotalLabel">${escapeHtml(T("calTotalForServings"))} (${escapeHtml(localizeDigits(state.servings))} ${escapeHtml(T("servings"))}):</span>
              <span class="cal-total-val" id="calTotalVal">${escapeHtml(localizeDigits(Math.round(cal.perServing * state.servings).toLocaleString()))} ${escapeHtml(T("calUnit"))}</span>
            </div>
          </div>

          <div class="macro-grid">
            <div class="macro-pill">
              <span class="macro-label">${escapeHtml(T("protein"))}</span>
              <span class="macro-val">${escapeHtml(localizeDigits(cal.protein))}</span>
            </div>
            <div class="macro-pill">
              <span class="macro-label">${escapeHtml(T("carbs"))}</span>
              <span class="macro-val">${escapeHtml(localizeDigits(cal.carbs))}</span>
            </div>
            <div class="macro-pill">
              <span class="macro-label">${escapeHtml(T("fat"))}</span>
              <span class="macro-val">${escapeHtml(localizeDigits(cal.fat))}</span>
            </div>
          </div>
          <p class="cal-note">${escapeHtml(ur ? (cal.noteUrdu || cal.note) : (cal.note || cal.noteUrdu))}</p>
        </div>

        <!-- AdSense Sidebar Placement Placeholder -->
        ${CONFIG.ADS && CONFIG.ADS.ENABLED ? `
        <aside class="ad-container ad-sidebar no-print" aria-label="Advertisement">
          <div class="ad-label">Advertisement</div>
          <div class="ad-slot-box" data-ad-slot="SIDEBAR">
            <span class="ad-slot-icon">📢</span>
            <span>Google AdSense (300×250 / Sidebar Slot)</span>
          </div>
        </aside>` : ""}
      </div>
    </div>

    <!-- AdSense In-Article Responsive Placement Placeholder -->
    ${CONFIG.ADS && CONFIG.ADS.ENABLED ? `
    <aside class="ad-container ad-banner-recipe no-print" aria-label="Advertisement">
      <div class="ad-label">Advertisement</div>
      <div class="ad-slot-box" data-ad-slot="RECIPE_INLINE">
        <span class="ad-slot-icon">📢</span>
        <span>Google AdSense In-Article Responsive Banner Slot</span>
      </div>
    </aside>` : ""}

    <!-- Instructions -->
    <div class="panel stack">
      <h3>${escapeHtml(T("instructions"))}</h3>
      <ol class="steps-list">${steps || "<li>—</li>"}</ol>
    </div>

    <!-- Tips -->
    <div class="panel stack">
      <h3>${escapeHtml(T("tips"))}</h3>
      <ul class="simple-list tips-list">${tips || "<li>—</li>"}</ul>
    </div>

    <!-- Dos and Don'ts -->
    <div class="dodont-cols stack">
      <div class="panel">
        <h3>${escapeHtml(T("dos"))}</h3>
        <ul class="simple-list dos-list">${dos || "<li>—</li>"}</ul>
      </div>
      <div class="panel">
        <h3>${escapeHtml(T("donts"))}</h3>
        <ul class="simple-list donts-list">${donts || "<li>—</li>"}</ul>
      </div>
    </div>

    <!-- Affiliate Product Recommendations -->
    ${renderAffiliateSection()}
  `;

  // Wire actions
  const heroImg = document.getElementById("heroBgImg");
  if (heroImg) loadDishImage(heroImg, d.name, 1200, 700);
  const heroPhoto = document.getElementById("heroPhoto");
  if (heroPhoto) loadDishImage(heroPhoto, d.name, 600, 450);

  $("#printBtn").addEventListener("click", () => window.print());
  $("#downloadBtn").addEventListener("click", () => downloadRecipe(d));
  $("#groceryBtn").addEventListener("click", openGroceryModal);
  $("#favBtn").addEventListener("click", () => {
    toggleFavorite(d.name, d.emoji || "🍲", d.origin || "");
  });
  $("#shareBtn").addEventListener("click", () => {
    openShareModal(d.name, d.emoji || "🍲");
  });

  $("#backBtn").addEventListener("click", () => {
    recipeView.classList.add("hidden");
    dishView.classList.remove("hidden");
    state.currentDish = null;
    state.recipe = null;
    updateBrowserUrl(null);
    document.title = "Recipe Studio — Authentic Global & South Asian Recipes | Nutrition & Grocery List";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#servMinus").addEventListener("click", () => changeServings(-1));
  $("#servPlus").addEventListener("click", () => changeServings(1));
}

/* ---------------- SERVINGS SCALER ---------------- */
function changeServings(delta) {
  const next = Math.min(24, Math.max(1, state.servings + delta));
  if (next === state.servings) return;
  state.servings = next;
  updateServingsDisplay();
}

function updateServingsDisplay() {
  const d = state.recipe;
  if (!d) return;
  const mult = state.servings / state.baseServings;

  document.querySelectorAll("#ingList li").forEach(li => {
    const raw = li.dataset.raw;
    if (!raw) return;
    const amtEl = li.querySelector(".amount");
    if (amtEl) amtEl.textContent = formatAmount(raw, mult);
  });

  const sv = document.getElementById("servingsVal");
  if (sv) sv.textContent = localizeDigits(state.servings);
  document.querySelectorAll(".servings-note").forEach(n => {
    n.innerHTML = `${escapeHtml(t("standardNote"))}: ${escapeHtml(localizeDigits(state.baseServings))} · ×${escapeHtml(fmtQty(mult))}`;
  });

  const c = d.cost || {};
  const usd = document.getElementById("costUSD");
  const pkr = document.getElementById("costPKR");
  const inr = document.getElementById("costINR");
  if (usd) usd.textContent = fmtMoneyLocalized((c.usd || 0) * mult, "usd");
  if (pkr) pkr.textContent = fmtMoneyLocalized((c.pkr || 0) * mult, "pkr");
  if (inr) inr.textContent = fmtMoneyLocalized((c.inr || 0) * mult, "inr");

  const cal = getRecipeCalories(d);
  const totalCalVal = document.getElementById("calTotalVal");
  const totalCalLabel = document.getElementById("calTotalLabel");
  if (totalCalVal) {
    totalCalVal.textContent = `${escapeHtml(localizeDigits(Math.round(cal.perServing * state.servings).toLocaleString()))} ${escapeHtml(t("calUnit"))}`;
  }
  if (totalCalLabel) {
    totalCalLabel.textContent = `${escapeHtml(t("calTotalForServings"))} (${escapeHtml(localizeDigits(state.servings))} ${escapeHtml(t("servings"))}):`;
  }

  const heroServ = document.getElementById("heroServChip");
  if (heroServ) {
    heroServ.textContent = `🍽️ ${localizeDigits(state.servings)} ${t("servings")}`;
  }
}

/* ---------------- SMART GROCERY LIST ---------------- */
let groceryItems = [];

function openGroceryModal() {
  const d = state.recipe;
  if (!d) return;
  const ur = state.lang === "ur";
  const mult = state.servings / state.baseServings;

  $("#groceryModalTitle").textContent = `${t("groceryTitle")} — ${ur ? (d.nameUrdu || d.name) : d.name}`;
  $("#groceryModalSub").textContent = `${localizeDigits(state.servings)} ${t("servings")} · ${t("grocerySub")}`;

  groceryItems = (d.ingredients || []).map((i, idx) => {
    const item = ur ? (i.itemUrdu || i.item || "") : (i.item || "");
    const amt = formatAmount(i.amount, mult);
    return {
      id: `ing_${idx}`,
      text: `${amt} ${item}`.trim(),
      checked: false,
      isCustom: false
    };
  });

  renderGroceryItems();
  $("#groceryModal").classList.remove("hidden");
}

function renderGroceryItems() {
  const listEl = $("#groceryItemsList");
  listEl.innerHTML = "";

  groceryItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = `grocery-item ${item.checked ? "checked" : ""}`;

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = item.checked;
    cb.addEventListener("change", () => {
      item.checked = cb.checked;
      li.classList.toggle("checked", item.checked);
      updateGroceryCounts();
    });

    const span = document.createElement("span");
    span.className = "grocery-item-text";
    span.textContent = item.text;

    li.appendChild(cb);
    li.appendChild(span);

    if (item.isCustom) {
      const delBtn = document.createElement("button");
      delBtn.className = "grocery-delete-btn";
      delBtn.textContent = "✕";
      delBtn.title = "Delete item";
      delBtn.addEventListener("click", () => {
        groceryItems.splice(index, 1);
        renderGroceryItems();
      });
      li.appendChild(delBtn);
    }

    listEl.appendChild(li);
  });

  updateGroceryCounts();
}

function updateGroceryCounts() {
  const checked = groceryItems.filter(i => i.checked).length;
  const total = groceryItems.length;
  $("#groceryRemainingCount").textContent = `${total - checked} of ${total} remaining`;
}

function addCustomGroceryItem() {
  const input = $("#customGroceryInput");
  const val = input.value.trim();
  if (!val) return;
  groceryItems.push({
    id: `custom_${Date.now()}`,
    text: val,
    checked: false,
    isCustom: true
  });
  input.value = "";
  renderGroceryItems();
}

function copyGroceryList() {
  const d = state.recipe;
  const name = d ? (state.lang === "ur" ? d.nameUrdu || d.name : d.name) : "Recipe";
  let text = `🛒 Grocery Shopping List: ${name} (${state.servings} servings)\n`;
  text += `----------------------------------------\n`;
  groceryItems.forEach(i => {
    text += `${i.checked ? "[✓]" : "[ ]"} ${i.text}\n`;
  });
  text += `----------------------------------------\n`;
  text += `Recipe Studio 🍲 ${window.location.origin}${window.location.pathname}`;

  navigator.clipboard.writeText(text).then(() => {
    showToast(t("toastCopied"));
  }).catch(() => {
    showToast(t("toastCopied"));
  });
}

function shareGroceryWhatsApp() {
  const d = state.recipe;
  const name = d ? (state.lang === "ur" ? d.nameUrdu || d.name : d.name) : "Recipe";
  let text = `🛒 *Grocery Shopping List: ${name}* (${state.servings} servings)\n\n`;
  groceryItems.forEach(i => {
    text += `${i.checked ? "✅" : "▫️"} ${i.text}\n`;
  });
  text += `\n_Generated by Recipe Studio 🍲_`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
}

function printGrocerySlip() {
  document.body.classList.add("printing-grocery");
  window.print();
  setTimeout(() => {
    document.body.classList.remove("printing-grocery");
  }, 1000);
}

/* ---------------- SOCIAL SHARE MODAL ---------------- */
function openShareModal(dishName, emoji) {
  const d = state.recipe && state.recipe.name === dishName ? state.recipe : null;
  const name = dishName;
  const ur = state.lang === "ur";
  const desc = d ? (ur ? d.descriptionUrdu || d.description : d.description) : "Authentic, audience-loved recipe from Recipe Studio";
  const cal = d ? getRecipeCalories(d).perServing : null;
  const prep = d ? (ur ? d.prepTimeUrdu || d.prepTime : d.prepTime) : null;
  const cook = d ? (ur ? d.cookTimeUrdu || d.cookTime : d.cookTime) : null;

  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set("recipe", name);
  const shareUrl = currentUrl.toString();

  $("#sharePreviewEmoji").textContent = emoji || d?.emoji || "🍲";
  $("#sharePreviewTitle").textContent = name;
  $("#sharePreviewDesc").textContent = desc ? desc.slice(0, 95) + "…" : "Authentic recipe with nutrition & shopping list";
  $("#shareUrlInput").value = shareUrl;

  let shareText = `🍲 *${name}* — Authentic Recipe\n`;
  if (prep && cook) shareText += `⏱️ Prep: ${prep} | Cook: ${cook}\n`;
  if (cal) shareText += `🔥 Nutrition: ~${cal} kcal / serving\n`;
  shareText += `\nCheck out the full authentic recipe, ingredients & step-by-step cooking guide on Recipe Studio:\n👉 ${shareUrl}`;

  $("#shareWhatsApp").onclick = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, "_blank");
  };
  $("#shareFacebook").onclick = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
  };
  $("#shareTwitter").onclick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, "_blank");
  };
  $("#shareTelegram").onclick = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, "_blank");
  };
  $("#copyShareUrlBtn").onclick = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      showToast(t("linkCopied"));
    }).catch(() => {
      $("#shareUrlInput").select();
      document.execCommand("copy");
      showToast(t("linkCopied"));
    });
  };

  $("#shareModal").classList.remove("hidden");
}

/* ---------------- DOWNLOAD RECIPE AS TEXT ---------------- */
function downloadRecipe(data) {
  const ur = state.lang === "ur";
  const mult = state.servings / state.baseServings;
  const L = [];

  L.push("============================================================");
  L.push(`  ${(ur ? data.nameUrdu : data.name) || data.name}  `);
  if (data.origin) L.push(`  ${ur ? "مقام: " : "Origin: "}${ur ? (data.originUrdu || data.origin) : data.origin}`);
  L.push("============================================================");
  L.push("");
  L.push(ur ? (data.descriptionUrdu || data.description || "") : (data.description || ""));
  L.push("");
  L.push(`- ${ur ? "سرونگ: " : "Servings: "}${state.servings}`);
  L.push(`- ${ur ? "تیاری: " : "Prep time: "}${ur ? (data.prepTimeUrdu || data.prepTime) : data.prepTime}`);
  L.push(`- ${ur ? "پکائیں: " : "Cook time: "}${ur ? (data.cookTimeUrdu || data.cookTime) : data.cookTime}`);
  L.push(`- ${ur ? "مشکل: " : "Difficulty: "}${ur ? (data.difficultyUrdu || data.difficulty) : data.difficulty}`);

  const cal = getRecipeCalories(data);
  L.push(`- ${ur ? "کیلوریز (فی سرونگ): " : "Calories (per serving): "}${cal.perServing} kcal`);
  L.push(`- ${ur ? "پروٹین: " : "Protein: "}${cal.protein} | ${ur ? "کاربوہائیڈریٹ: " : "Carbs: "}${cal.carbs} | ${ur ? "چکنائی: " : "Fat: "}${cal.fat}`);
  L.push("");
  L.push(ur ? "── اجزاء ──" : "-- INGREDIENTS --");
  (data.ingredients || []).forEach(i => {
    const item = ur ? (i.itemUrdu || i.item || "") : (i.item || "");
    const amt = formatAmount(i.amount, mult);
    L.push(`  • ${amt} ${item}`);
  });
  L.push("");
  L.push(ur ? "── ترکیب ──" : "-- INSTRUCTIONS --");
  (data.instructions || []).forEach((s, idx) => {
    const txt = ur ? (s.ur || s.en || "") : (s.en || s.ur || "");
    L.push(`  ${idx + 1}. ${txt}`);
  });
  L.push("");
  L.push(ur ? "── شیف کے نکات ──" : "-- CHEF'S TIPS --");
  (data.tips || []).forEach(x => L.push(`  💡 ${ur ? (x.ur || x.en) : (x.en || x.ur)}`));
  L.push("");
  L.push(ur ? "── کریں ──" : "-- DO'S --");
  (data.dos || []).forEach(x => L.push(`  ✅ ${ur ? (x.ur || x.en) : (x.en || x.ur)}`));
  L.push("");
  L.push(ur ? "── نہ کریں ──" : "-- DON'TS --");
  (data.donts || []).forEach(x => L.push(`  🚫 ${ur ? (x.ur || x.en) : (x.en || x.ur)}`));
  L.push("");
  L.push(ur ? "── ترکیب اسٹوڈیو سے تیار کردہ 🍲 ──" : "-- Generated by Recipe Studio 🍲 --");

  const blob = new Blob(["\ufeff" + L.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${(data.name || "recipe").replace(/[^a-z0-9]+/gi, "_")}_${ur ? "Urdu" : "Recipe"}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* ---------------- SEARCH & SURPRISE (WITH CLIENT RATE LIMITING) ---------------- */
let lastSearchTimestamp = 0;
const SEARCH_COOLDOWN_MS = 2000;

function doSearch() {
  const now = Date.now();
  if (now - lastSearchTimestamp < SEARCH_COOLDOWN_MS) {
    showToast(t("searchCooldown"));
    return;
  }
  const q = $("#searchInput").value.trim();
  if (!q) return;
  lastSearchTimestamp = now;
  openRecipe(q, "🍽️");
}

function surpriseMe() {
  const cat = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  const dish = cat.dishes[Math.floor(Math.random() * cat.dishes.length)];
  openRecipe(dish.name, dish.emoji);
}

/* ---------------- INIT ---------------- */
function init() {
  initFoodFloat();
  renderTabs();
  renderDishGrid();
  applyLang();
  applyTheme();

  // Language & Theme listeners
  $("#langEn").addEventListener("click", () => setLang("en"));
  $("#langUr").addEventListener("click", () => setLang("ur"));
  document.querySelectorAll(".theme-btn").forEach(b => {
    b.addEventListener("click", () => setTheme(b.dataset.theme));
  });

  // Search & Surprise listeners
  $("#searchBtn").addEventListener("click", doSearch);
  $("#searchInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") doSearch();
  });
  $("#surpriseBtn").addEventListener("click", surpriseMe);

  // Grocery modal listeners
  $("#closeGroceryModal").addEventListener("click", () => $("#groceryModal").classList.add("hidden"));
  $("#groceryModal").addEventListener("click", (e) => {
    if (e.target.id === "groceryModal") $("#groceryModal").classList.add("hidden");
  });
  $("#selectAllGrocery").addEventListener("click", () => {
    groceryItems.forEach(i => i.checked = true);
    renderGroceryItems();
  });
  $("#clearCheckedGrocery").addEventListener("click", () => {
    groceryItems.forEach(i => i.checked = false);
    renderGroceryItems();
  });
  $("#addCustomGroceryBtn").addEventListener("click", addCustomGroceryItem);
  $("#customGroceryInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addCustomGroceryItem();
  });
  $("#copyGroceryBtn").addEventListener("click", copyGroceryList);
  $("#whatsappGroceryBtn").addEventListener("click", shareGroceryWhatsApp);
  $("#printGroceryBtn").addEventListener("click", printGrocerySlip);

  // Share modal listeners
  $("#closeShareModal").addEventListener("click", () => $("#shareModal").classList.add("hidden"));
  $("#shareModal").addEventListener("click", (e) => {
    if (e.target.id === "shareModal") $("#shareModal").classList.add("hidden");
  });

  // Deep Link Routing check (?recipe=...)
  try {
    const params = new URLSearchParams(window.location.search);
    const recipeParam = params.get("recipe") || window.location.hash.replace(/^#recipe=/, "");
    if (recipeParam) {
      openRecipe(decodeURIComponent(recipeParam), "🍽️");
    }
  } catch {}
}

document.addEventListener("DOMContentLoaded", init);
