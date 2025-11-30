// Script to generate replacement patterns for all menu items
const items = [
  // Remaining Starters
  { name: "Chicken Manchurian", price: 230, desc: "Battered chicken pieces in spicy Manchurian sauce" },
  { name: "Paneer Chilli Dry", price: 210, desc: "Stir-fried paneer with bell peppers and onions" },
  { name: "Prawn Koliwada", price: 320, desc: "Mumbai-style crispy fried prawns with spicy coating" },
  
  // Vegetarian
  { name: "Paneer Butter Masala", price: 260, desc: "Rich and creamy paneer curry in tomato-based gravy" },
  { name: "Dal Makhani", price: 200, desc: "Slow-cooked black lentils in butter and cream" },
  { name: "Palak Paneer", price: 230, desc: "Cottage cheese cubes in creamy spinach gravy" },
  { name: "Aloo Gobi", price: 170, desc: "Dry curry of potatoes and cauliflower with spices" },
  { name: "Chole Bhature", price: 210, desc: "Spicy chickpea curry served with fluffy fried bread" },
  { name: "Veg Biryani", price: 220, desc: "Fragrant basmati rice cooked with mixed vegetables and spices" },
  { name: "Kadai Paneer", price: 250, desc: "Paneer cooked with bell peppers in spicy tomato gravy" },
  { name: "Mix Veg Curry", price: 190, desc: "Assorted vegetables cooked in flavorful curry sauce" },
  { name: "Malai Kofta", price: 240, desc: "Deep-fried vegetable balls in rich creamy gravy" },
  { name: "Jeera Aloo", price: 150, desc: "Cumin-flavored potatoes with aromatic spices" },
  { name: "Veg Kolhapuri", price: 220, desc: "Spicy Maharashtrian-style mixed vegetable curry" },
  { name: "Mushroom Masala", price: 240, desc: "Fresh mushrooms cooked in spicy onion-tomato gravy" },
  { name: "Veg Handi", price: 230, desc: "Mixed vegetables cooked in traditional clay pot style" },
  { name: "Paneer Lababdar", price: 270, desc: "Rich paneer curry with cashews and aromatic spices" },
  
  // Non-Vegetarian
  { name: "Butter Chicken", price: 320, desc: "Creamy tomato-based curry with tender chicken pieces" },
  { name: "Hyderabadi Chicken Biryani", price: 320, desc: "Aromatic basmati rice with tender chicken and authentic spices" },
  { name: "Rogan Josh", price: 380, desc: "Kashmiri-style mutton curry with aromatic spices" },
  { name: "Fish Curry", price: 340, desc: "Fresh fish cooked in coconut-based spicy curry" },
  { name: "Tandoori Chicken (Half)", price: 360, desc: "Clay oven roasted chicken marinated in yogurt and spices" },
  { name: "Prawn Masala", price: 380, desc: "Juicy prawns cooked in spicy onion-tomato gravy" },
  { name: "Chicken Tikka Masala", price: 300, desc: "Grilled chicken tikka in rich tomato-cream sauce" },
  { name: "Egg Curry", price: 150, desc: "Boiled eggs cooked in spicy onion-tomato gravy" },
  { name: "Mutton Biryani", price: 400, desc: "Fragrant basmati rice with tender mutton and aromatic spices" },
  { name: "Chicken Korma", price: 290, desc: "Mild chicken curry cooked in cashew and yogurt gravy" },
  { name: "Kerala Fish Fry", price: 350, desc: "Crispy fried fish marinated with Kerala spices" },
  { name: "Crab Masala", price: 420, desc: "Fresh crab cooked in spicy coastal-style masala" }
];

// Generate replacement patterns
items.forEach(item => {
  const oldPattern = `                        <div class="cart-controls">
                            <button class="quantity-btn" onclick="changeQuantity('${item.name}', -1)">-</button>
                            <span class="quantity-display" id="qty-${item.name}">0</span>
                            <button class="quantity-btn" onclick="changeQuantity('${item.name}', 1)">+</button>
                            <button class="add-to-cart-btn" onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
                        </div>`;
  
  const newPattern = `                        <div class="item-actions">
                            <button class="view-item-btn" onclick="viewItem('${item.name}', ${item.price}, '${item.desc}')">View Item</button>
                        </div>`;
  
  console.log(`Old: ${oldPattern}`);
  console.log(`New: ${newPattern}`);
  console.log('---');
});