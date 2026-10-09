// Sree Swathi Tiffins (Veg) - Exact Original Menu Data & Google Reviews
// 100% Verified from Original In-Store Rate Cards (Images 1, 2, 3, 4)

const STORE_CONFIG = {
  name: "Sree Swathi Tiffins (Veg)",
  shortName: "Swathi Tiffins",
  tagline: "Authentic South Indian Tiffin Hub • Since 25+ Years",
  teluguName: "శ్రీ స్వాతి టిఫిన్స్ (వెజ్)",
  gstNumber: "36EKHPK9217G1ZX",
  ownerPhone: "07995008827",
  phoneFormatted: "+91 79950 08827",
  whatsappPhone: "917995008827",
  googleRating: 3.9,
  totalReviews: "5,384+",
  address: "Street No. 8, Habsiguda / Ramanthapur Main Road, Hyderabad, Telangana 500007",
  landmark: "Opposite Street No. 8 Main Road",
  googleMapsUrl: "https://maps.app.goo.gl/qcgKFp7eH39BFdNw5",
  coordinates: {
    lat: 17.4029671,
    lng: 78.5433112
  },
  timings: "6:00 AM – 11:00 PM (All 7 Days Open)",
  serviceType: "Self-Service (Darshini Style) & Fast Takeaway Counter"
};

// Exact Original Menu from Original In-Store Rate Cards (Images 1, 2, 3, 4)
const REAL_MENU_DATA = [
  // ==================== TIFFINS (Image 1) ====================
  { id: 1, name: "Idly (Plate)", category: "tiffins", price: 30, itemNo: "1", isVeg: true, badge: "Iconic", tag: "Breakfast Classic" },
  { id: 2, name: "Sambar Idly", category: "tiffins", price: 40, itemNo: "2", isVeg: true, badge: "Banger Combo", tag: "Hot & Tangy" },
  { id: 3, name: "Single Idly", category: "tiffins", price: 18, itemNo: "3", isVeg: true, badge: "Quick Bite", tag: "Light" },
  { id: 4, name: "Ghee Idly", category: "tiffins", price: 50, itemNo: "4", isVeg: true, badge: "Pure Desi Ghee", tag: "Aromatic" },
  { id: 5, name: "Guntur Idly / Karam Idly", category: "tiffins", price: 60, itemNo: "5", isVeg: true, badge: "Spicy Level 100", tag: "Guntur Podi" },
  { id: 6, name: "Tawa Idly", category: "tiffins", price: 55, itemNo: "6", isVeg: true, badge: "Tawa Tossed", tag: "Crispy Edges" },
  { id: 7, name: "Single Sambar Idly (1 Pc)", category: "tiffins", price: 25, itemNo: "7", isVeg: true, tag: "Mini Portion" },
  { id: 8, name: "Tomato Upma", category: "tiffins", price: 35, itemNo: "8", isVeg: true, badge: "Homely Vibe", tag: "Comfort Food" },
  { id: 9, name: "Mysore Bajji (4 Pcs)", category: "tiffins", price: 40, itemNo: "9", isVeg: true, badge: "Daily Bestseller", tag: "Golden Crisp" },
  { id: 10, name: "Mysore Bajji (2 Pcs)", category: "tiffins", price: 25, itemNo: "10", isVeg: true, tag: "Snack Portion" },
  { id: 11, name: "Tawa Bonda", category: "tiffins", price: 55, itemNo: "11", isVeg: true, badge: "Chef Special", tag: "Spiced Masala" },
  { id: 12, name: "Vada (Plate)", category: "tiffins", price: 50, itemNo: "12", isVeg: true, badge: "Super Crunchy", tag: "Fresh Batch" },
  { id: 13, name: "Sambar Vada", category: "tiffins", price: 60, itemNo: "13", isVeg: true, badge: "Top Tier", tag: "Deep Dip" },
  { id: 14, name: "Single Vada", category: "tiffins", price: 30, itemNo: "14", isVeg: true, tag: "Solo Crunch" },
  { id: 15, name: "Single Sambar Vada", category: "tiffins", price: 38, itemNo: "15", isVeg: true, tag: "Single Sambar" },
  { id: 16, name: "Tawa Vada", category: "tiffins", price: 75, itemNo: "16", isVeg: true, badge: "Special Roast", tag: "Masala Crisp" },
  { id: 17, name: "Poori (3 Nos)", category: "tiffins", price: 50, itemNo: "21", isVeg: true, badge: "Crowd Favorite", tag: "With Curry" },
  { id: 18, name: "Poori (2 Pcs)", category: "tiffins", price: 35, itemNo: "22", isVeg: true, tag: "Mini Plate" },
  { id: 19, name: "Chapathi (Plate)", category: "tiffins", price: 50, isVeg: true, badge: "Soft Wheat", tag: "With Kurma" },
  { id: 20, name: "Parota", category: "tiffins", price: 55, isVeg: true, badge: "Flaky & Crisp", tag: "Must Try" },
  { id: 21, name: "Dahi Vada", category: "tiffins", price: 60, isVeg: true, badge: "Cool & Tangy", tag: "Curd Dip" },

  // ==================== SINGLE & COMBOS (Image 1) ====================
  { id: 22, name: "1 Idly & 1 Vada", category: "combos", price: 40, itemNo: "17", isVeg: true, badge: "OG Breakfast", tag: "Power Duo" },
  { id: 23, name: "1 Idly & 1 Vada Sambar", category: "combos", price: 50, itemNo: "18", isVeg: true, badge: "Best Value", tag: "Sambar Dip" },
  { id: 24, name: "2 Idly & 1 Vada", category: "combos", price: 60, itemNo: "19", isVeg: true, badge: "Trio Combo", tag: "Heavy Breakfast" },
  { id: 25, name: "2 Idly & 1 Vada Sambar", category: "combos", price: 70, itemNo: "20", isVeg: true, badge: "Grand Combo", tag: "All-in-One" },

  // ==================== DOSAS & PESARATTU (Image 4) ====================
  { id: 26, name: "Plain Dosa", category: "dosas", price: 40, itemNo: "29", isVeg: true, badge: "Golden Roast", tag: "Crispy Thin" },
  { id: 27, name: "Masala Dosa", category: "dosas", price: 50, itemNo: "30", isVeg: true, badge: "Legendary", tag: "Aloo Masala" },
  { id: 28, name: "Onion Dosa", category: "dosas", price: 65, itemNo: "31", isVeg: true, badge: "Caramelized", tag: "Onion Crunch" },
  { id: 29, name: "Pesarattu", category: "dosas", price: 70, itemNo: "32", isVeg: true, badge: "Authentic Andhra", tag: "Moong Dal" },
  { id: 30, name: "Uttappa", category: "dosas", price: 65, itemNo: "33", isVeg: true, badge: "Fluffy & Thick", tag: "Topped with Veggies" },
  { id: 31, name: "Rava Dosa", category: "dosas", price: 65, itemNo: "34", isVeg: true, badge: "Lacy Crisp", tag: "Semolina Magic" },
  { id: 32, name: "Set Dosa", category: "dosas", price: 65, itemNo: "35", isVeg: true, badge: "Sponge Soft", tag: "Cloud Dosas" },
  { id: 33, name: "Onion Rava Dosa", category: "dosas", price: 70, itemNo: "36", isVeg: true, badge: "Crunch Level Max", tag: "Onion Rava" },
  { id: 34, name: "Upma Pesarattu", category: "dosas", price: 75, itemNo: "37", isVeg: true, badge: "MLA Style", tag: "Ginger Upma Inside" },
  { id: 35, name: "Upma Dosa", category: "dosas", price: 75, itemNo: "38", isVeg: true, badge: "Full Stomach", tag: "Upma Stuffed" },
  { id: 36, name: "70 MM Dosa", category: "dosas", price: 100, itemNo: "39", isVeg: true, badge: "Jumbo Sized 🔥", tag: "Table Length" },
  { id: 37, name: "Paper Dosa", category: "dosas", price: 90, itemNo: "40", isVeg: true, badge: "Ultra Thin", tag: "Paper Crisp" },
  { id: 38, name: "Kakinada Pesarattu", category: "dosas", price: 80, itemNo: "41", isVeg: true, badge: "Godavari Style", tag: "Allam Chutney" },
  { id: 39, name: "Ragi Rava Dosa", category: "dosas", price: 80, itemNo: "42", isVeg: true, badge: "Healthy Fit", tag: "Finger Millet" },
  { id: 40, name: "Steem Dosa", category: "dosas", price: 70, itemNo: "43", isVeg: true, badge: "Zero Oil", tag: "Steam Cooked" },
  { id: 41, name: "Millet Dosa", category: "dosas", price: 85, itemNo: "44", isVeg: true, badge: "Super Grain", tag: "Nutrient Rich" },
  { id: 42, name: "Ghee Karam Dosa", category: "dosas", price: 90, isVeg: true, badge: "Red Chilli Ghee", tag: "Fiery Signature" },
  { id: 43, name: "Butter Masala Dosa", category: "dosas", price: 75, isVeg: true, badge: "Amul Butter", tag: "Melt in Mouth" },
  { id: 44, name: "Paneer Masala Dosa", category: "dosas", price: 80, isVeg: true, badge: "Loaded Paneer", tag: "Protein Rich" },
  { id: 45, name: "Paneer Butter Masala Dosa", category: "dosas", price: 90, isVeg: true, badge: "Chef Special", tag: "Royal Dosa" },

  // ==================== RICE & MEALS (Image 3) ====================
  { id: 46, name: "Tomato Rice", category: "rice-meals", price: 50, itemNo: "45", isVeg: true, badge: "Zesty & Tangy", tag: "Lunch Favorite" },
  { id: 47, name: "Lemon Rice", category: "rice-meals", price: 50, itemNo: "46", isVeg: true, badge: "Citrus Punch", tag: "Peanut Crunch" },
  { id: 48, name: "Curd Rice", category: "rice-meals", price: 50, itemNo: "47", isVeg: true, badge: "Cool Down", tag: "Tempered Tadka" },
  { id: 49, name: "Veg. Biryani", category: "rice-meals", price: 65, itemNo: "48", isVeg: true, badge: "Hyderabadi Spiced", tag: "Basmati Aroma" },
  { id: 50, name: "Rice Pongal", category: "rice-meals", price: 55, itemNo: "49", isVeg: true, badge: "Ghee Tempered", tag: "Moong & Pepper" },
  { id: 51, name: "Plate Meals (Dine-In)", category: "rice-meals", price: 90, itemNo: "50", isVeg: true, badge: "Thali Meal", tag: "Rice, Dal, Curries" },
  { id: 52, name: "Plate Meals Parcel", category: "rice-meals", price: 95, itemNo: "51", isVeg: true, badge: "Hot Pack", tag: "Packed Lunch" },
  { id: 53, name: "Full Meals Parcel", category: "rice-meals", price: 120, itemNo: "52", isVeg: true, badge: "Grand Feast", tag: "Complete Parcel" },
  { id: 54, name: "Extra Rice", category: "rice-meals", price: 35, itemNo: "53", isVeg: true, tag: "Extra Portion" },
  { id: 55, name: "Dal, Sambar, Curry (Each)", category: "rice-meals", price: 30, itemNo: "54", isVeg: true, tag: "Side Gravy" },

  // ==================== SWEETS (Image 3) ====================
  { id: 56, name: "Double Ka Meeta", category: "sweets", price: 30, itemNo: "57", isVeg: true, badge: "Royal Dessert ✨", tag: "Saffron Bread Pudding" },

  // ==================== TEA, COFFEE & BEVERAGES (Image 2) ====================
  { id: 57, name: "Single Tea", category: "beverages", price: 10, isVeg: true, badge: "₹10 Only", tag: "Quick Chai" },
  { id: 58, name: "Single Black Tea", category: "beverages", price: 10, isVeg: true, tag: "Zero Milk" },
  { id: 59, name: "Single Allam (Ginger) Tea", category: "beverages", price: 12, isVeg: true, badge: "Throat Soother", tag: "Fresh Ginger" },
  { id: 60, name: "Parcel Tea", category: "beverages", price: 16, isVeg: true, tag: "Takeaway Cup" },
  { id: 61, name: "Ginger Tea", category: "beverages", price: 16, isVeg: true, tag: "Crushed Ginger" },
  { id: 62, name: "Lemon Tea", category: "beverages", price: 16, isVeg: true, tag: "Fresh Lime" },
  { id: 63, name: "Tajmahal Black Tea", category: "beverages", price: 16, isVeg: true, tag: "Strong Brew" },
  { id: 64, name: "Parcel Ginger Tea", category: "beverages", price: 18, isVeg: true, tag: "Takeaway Flask" },
  { id: 65, name: "Full Tea", category: "beverages", price: 20, isVeg: true, badge: "Kadak Chai", tag: "Full Glass" },
  { id: 66, name: "Sonti Tea (Dry Ginger)", category: "beverages", price: 20, isVeg: true, tag: "Ayurvedic Zing" },
  { id: 67, name: "Pepper Tea", category: "beverages", price: 20, isVeg: true, tag: "Black Pepper" },
  { id: 68, name: "Ilachi (Cardamom) Tea", category: "beverages", price: 20, isVeg: true, badge: "Fragrant", tag: "Elaichi Pods" },
  { id: 69, name: "Masala Tea", category: "beverages", price: 20, isVeg: true, badge: "Whole Spiced", tag: "All Spice Blend" },
  { id: 70, name: "Green Tea", category: "beverages", price: 20, isVeg: true, tag: "Antioxidant" },
  { id: 71, name: "Badam Tea", category: "beverages", price: 20, isVeg: true, tag: "Almond Infused" },
  { id: 72, name: "Hot Badam Milk", category: "beverages", price: 20, isVeg: true, badge: "Rich & Sweet", tag: "Almond Flakes" },
  { id: 73, name: "Hot Milk", category: "beverages", price: 20, isVeg: true, tag: "Boiled Fresh" },
  { id: 74, name: "Filter Coffee", category: "beverages", price: 20, isVeg: true, badge: "South Indian OG ☕", tag: "Degree Decoction" },
  { id: 75, name: "Badam Coffee", category: "beverages", price: 20, isVeg: true, tag: "Almond Coffee" },
  { id: 76, name: "Black Coffee", category: "beverages", price: 20, isVeg: true, tag: "Strong Black" },
  { id: 77, name: "Sonti Coffee", category: "beverages", price: 20, isVeg: true, tag: "Dry Ginger Coffee" },
  { id: 78, name: "Bru Coffee", category: "beverages", price: 20, isVeg: true, tag: "Instant Froth" },
  { id: 79, name: "Nescafe Coffee", category: "beverages", price: 20, isVeg: true, tag: "Classic Roast" },
  { id: 80, name: "Boost", category: "beverages", price: 20, isVeg: true, tag: "Secret of Energy" },
  { id: 81, name: "Horlicks", category: "beverages", price: 20, isVeg: true, tag: "Malted Milk" },
  { id: 82, name: "Bournvita", category: "beverages", price: 20, isVeg: true, tag: "Choco Malt" },
  { id: 83, name: "Pista Badam Drink Mix", category: "beverages", price: 20, isVeg: true, tag: "Nutty Blend" },
  { id: 84, name: "Ragi Malt Drink Mix", category: "beverages", price: 20, isVeg: true, badge: "Health Drink", tag: "Millet Power" },
  { id: 85, name: "Badam Drink Mix", category: "beverages", price: 20, isVeg: true, tag: "Creamy Badam" },
  { id: 86, name: "Rose Milk Drink Mix", category: "beverages", price: 20, isVeg: true, tag: "Chilled Scent" },
  { id: 87, name: "Pankaja Kasthuri", category: "beverages", price: 20, isVeg: true, badge: "Ayurvedic Herbal", tag: "Herbal Decoction" },
  { id: 88, name: "Tomato Soup", category: "beverages", price: 20, isVeg: true, tag: "Hot & Tangy" },
  { id: 89, name: "Osmania Biscuit", category: "beverages", price: 3, isVeg: true, badge: "₹3 / Piece", tag: "Packets Available" }
];

// Actual Reviews from Google Maps
const REAL_GOOGLE_REVIEWS = [
  {
    name: "Rohit Kshirsagar",
    badge: "Local Guide · 130 reviews",
    rating: 5,
    time: "7 months ago (Updated)",
    comment: "They have renovated the place since last time I visited :-) They have cleaned up very well. The wash basin area is also very neat now. Tasty and classic tiffins!",
    tag: "tiffins"
  },
  {
    name: "Jeetendra Singh",
    badge: "Local Guide · 57 reviews",
    rating: 5,
    time: "a year ago",
    comment: "Swathi Tiffins has become our daily go-to breakfast spot, and honestly, it never disappoints. The food is consistently fresh, homely, and packed with authentic South Indian flavors. From piping hot idlis to perfectly crisp dosas and flavorful sambar.",
    tag: "tiffins"
  },
  {
    name: "Lakshmi Srividya",
    badge: "Local Guide · 149 reviews",
    rating: 5,
    time: "3 years ago",
    comment: "It has been here since my childhood. The taste has never changed till now. Even the rush at breakfast hours have never changed. Tasty food. Healthy and quality food. Highly recommended for breakfast. A suggestion: go early in the morning by 6:30am to beat Sunday rush!",
    tag: "fresh tiffins"
  },
  {
    name: "diPpY ReDdY",
    badge: "Local Guide · 31 reviews",
    rating: 5,
    time: "5 months ago",
    comment: "Best parotha ever tasted. Fresh and hot breakfast.",
    tag: "parata"
  },
  {
    name: "Sravan Teja",
    badge: "Local Guide · 84 reviews",
    rating: 4,
    time: "6 years ago",
    comment: "I have ordered the 70mm Dosa and the size is huge and perfect! The chutney and items list is extensive and taste is good. Decent tiffin center for reasonable prices.",
    tag: "tiffins"
  },
  {
    name: "Venkatesh Tejavath",
    badge: "Local Guide · 20 reviews",
    rating: 5,
    time: "4 years ago",
    comment: "It's been more than 25 years in existence.. Locally very popular landmark serving all the hustling office going crowd with their authentic udupi style breakfast cuisine.",
    tag: "tiffin centre"
  },
  {
    name: "YOGESH KUMAR",
    badge: "Local Guide · 28 reviews",
    rating: 5,
    time: "4 months ago",
    comment: "Very clean and hygiene .. Tasty and genuine south indian food right on the main road.",
    tag: "fresh tiffins"
  },
  {
    name: "Harsh Vardhan",
    badge: "12 reviews",
    rating: 5,
    time: "a year ago",
    comment: "Known this place since 2020, the taste has remained the same since then. Must try parata and bonda! 😍",
    tag: "bonda"
  },
  {
    name: "Poulami Bharati",
    badge: "Local Guide · 29 reviews",
    rating: 5,
    time: "7 years ago",
    comment: "Serves self serviced vegetarian foods. Foods are tasty. Tea is very good. Only good place which serves authentic crispy dosa in Habsiguda area of Hyderabad with the right amount of spices.",
    tag: "tiffins"
  },
  {
    name: "REDDY'S",
    badge: "Local Guide · 1,094 reviews",
    rating: 5,
    time: "2 years ago",
    comment: "Tiffins are tasty. Meals, veg Biryani are available at affordable prices. Juice and tea point is also available here. Good fast service.",
    tag: "veg biryani"
  },
  {
    name: "Bablox 001",
    badge: "Local Guide · 329 reviews",
    rating: 5,
    time: "2 years ago",
    comment: "I like the Idli here constantly Since 2001 and the day has come to have the delicious food for Rs.30/- in 2024.",
    tag: "tiffins"
  },
  {
    name: "Naga Suryakanth",
    badge: "Local Guide · 10 reviews",
    rating: 5,
    time: "a year ago",
    comment: "Great taste.. Superb poori, idly vada and parota!",
    tag: "poori"
  },
  {
    name: "Shane Hilton",
    badge: "Local Guide · 76 reviews",
    rating: 5,
    time: "2 years ago",
    comment: "Favourite Sunday post-church breakfast spot! EVERYTHING THEY PREPARE IS SO GOOD AND PERFECTLY SPICED. Shoutout for the tasty Allam chai!",
    tag: "juices"
  },
  {
    name: "Rajeev Singh",
    badge: "Local Guide · 91 reviews",
    rating: 5,
    time: "2 months ago",
    comment: "Good south Indian food. Rates very reasonable. Quick self-service.",
    tag: "tiffins"
  },
  {
    name: "Bhanu Teja Chitturi",
    badge: "Local Guide · 113 reviews",
    rating: 5,
    time: "6 years ago",
    comment: "Known for Quality of Breakfast... I personally loved Sambar.. Idly + sambar is a deadly combination here.",
    tag: "tiffins"
  },
  {
    name: "Anand Reddy",
    badge: "Local Guide · 247 reviews",
    rating: 5,
    time: "8 months ago",
    comment: "Liked their consistency of giving delicious foods to all of Habsiguda Ramanthapur areas since years. Many of my relatives and friends always choose this.",
    tag: "tiffin centre"
  }
];
