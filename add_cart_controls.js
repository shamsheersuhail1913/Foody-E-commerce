// Script to add cart controls to all remaining menu items
// This will be used to generate the HTML for all remaining items

const items = [
  // Non-Vegetarian
  { name: "Butter Chicken", price: 320, category: "non-vegetarian" },
  { name: "Hyderabadi Chicken Biryani", price: 320, category: "non-vegetarian" },
  { name: "Rogan Josh", price: 380, category: "non-vegetarian" },
  { name: "Fish Curry", price: 340, category: "non-vegetarian" },
  { name: "Tandoori Chicken (Half)", price: 360, category: "non-vegetarian" },
  { name: "Prawn Masala", price: 380, category: "non-vegetarian" },
  { name: "Chicken Tikka Masala", price: 300, category: "non-vegetarian" },
  { name: "Egg Curry", price: 150, category: "non-vegetarian" },
  { name: "Mutton Biryani", price: 400, category: "non-vegetarian" },
  { name: "Chicken Korma", price: 290, category: "non-vegetarian" },
  { name: "Kerala Fish Fry", price: 350, category: "non-vegetarian" },
  { name: "Crab Masala", price: 420, category: "non-vegetarian" },
  
  // Ice-cream
  { name: "Vanilla Scoop", price: 60, category: "ice-cream" },
  { name: "Mango Scoop", price: 70, category: "ice-cream" },
  { name: "Pista Kulfi", price: 90, category: "ice-cream" },
  { name: "Chocolate Scoop", price: 60, category: "ice-cream" },
  { name: "Butterscotch Scoop", price: 65, category: "ice-cream" },
  { name: "Kesar Pista Ice Cream", price: 80, category: "ice-cream" },
  { name: "Matka Kulfi", price: 120, category: "ice-cream" },
  { name: "Cassata Slice", price: 90, category: "ice-cream" },
  { name: "Tender Coconut Ice Cream", price: 100, category: "ice-cream" },
  { name: "Rose Falooda", price: 150, category: "ice-cream" },
  
  // Beverages
  { name: "Masala Chai", price: 40, category: "beverages" },
  { name: "Sweet Lassi", price: 80, category: "beverages" },
  { name: "Filter Coffee", price: 50, category: "beverages" },
  { name: "Nimbu Pani", price: 60, category: "beverages" },
  { name: "Mango Lassi", price: 100, category: "beverages" },
  { name: "Soft Drinks", price: 70, category: "beverages" },
  { name: "Cold Coffee", price: 110, category: "beverages" },
  { name: "Jaljeera", price: 50, category: "beverages" },
  { name: "Badam Milk (hot/cold)", price: 90, category: "beverages" },
  { name: "Blue Lagoon Mocktail", price: 140, category: "beverages" },
  { name: "Fresh Lime Soda", price: 70, category: "beverages" },
  { name: "Watermelon Juice", price: 80, category: "beverages" },
  
  // Desserts
  { name: "Gulab Jamun", price: 90, category: "desserts" },
  { name: "Ras Malai", price: 140, category: "desserts" },
  { name: "Jalebi", price: 120, category: "desserts" },
  { name: "Kheer", price: 110, category: "desserts" },
  { name: "Gajar Halwa", price: 130, category: "desserts" },
  { name: "Kulfi Falooda", price: 160, category: "desserts" },
  { name: "Rasgulla", price: 90, category: "desserts" },
  { name: "Phirni", price: 100, category: "desserts" },
  { name: "Shahi Tukda", price: 150, category: "desserts" },
  { name: "Mango Shrikhand", price: 120, category: "desserts" },
  { name: "Malpua with Rabri", price: 160, category: "desserts" },
  { name: "Basundi", price: 130, category: "desserts" }
];

/**
 * Renders all menu items to a specified container in the DOM.
 * @param {string} containerId - The ID of the DOM element to render the items into.
 */
function renderMenuItems(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  const itemsHtml = items.map(item => `
    <div class="menu-item" data-category="${item.category}">
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price}</p>
      <div class="cart-controls">
        <button class="quantity-btn" onclick="changeQuantity('${item.name}', -1)">-</button>
        <span class="quantity-display" id="qty-${item.name}">0</span>
        <button class="quantity-btn" onclick="changeQuantity('${item.name}', 1)">+</button>
        <button class="add-to-cart-btn" onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
      </div>
    </div>
  `).join('');

  container.innerHTML = itemsHtml;
}

// Example usage: Call this function when the page loads.
// Make sure you have a <div id="menu-container"></div> in your HTML file.
// document.addEventListener('DOMContentLoaded', () => renderMenuItems('menu-container'));