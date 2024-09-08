// Importing necessary modules and functions from different files
import { cart, addToCart, calculateCartQuantity } from '../data/cart.js'; // Importing cart-related functions and data
import { products } from '../data/products.js'; // Importing the list of products
import { formatCurrency } from './utils/money.js'; // Importing a utility function to format prices

// Initialize an empty string that will hold the HTML for all products
let productsHTML = '';

// Loop through each product in the products array
products.forEach((product) => { 
  // Append the HTML structure for each product to the productsHTML string
  productsHTML += `
    <div class="product-container">
      <!-- Product image section -->
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <!-- Product name, with text limited to 2 lines -->
      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <!-- Product rating section -->
      <div class="product-rating-container">
        <!-- Image representing the star rating (dynamically loaded based on product rating) -->
        <img class="product-rating-stars"
          src="${product.getStarsUrl()}">
        <!-- Display the number of ratings the product has received -->
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <!-- Product price section, formatted using the formatCurrency function -->
      <div class="product-price">
      ${product.getPrice()}
      </div>

      <!-- Product quantity selection dropdown -->
      <div class="product-quantity-container">
        <select>
          <!-- Options for selecting quantity, default is 1 -->
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <!-- Spacer for layout purposes -->
      <div class="product-spacer"></div>

      <!-- Confirmation section that appears when a product is added to the cart -->
      <div class="added-to-cart">
        <img src="images/icons/checkmark.png"> <!-- Checkmark icon -->
        Added
      </div>

      <!-- Add to Cart button, with a data attribute containing the product ID -->
      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

// Insert the generated HTML for all products into the products grid container in the DOM
document.querySelector('.js-products-grid').innerHTML = productsHTML;

// Function to update the cart quantity displayed in the header
function updateCartQuantity (){
  const cartQuantity = calculateCartQuantity(); // Calculate the total quantity of items in the cart

  // Update the HTML content of the cart quantity element with the calculated quantity
  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}

// Initial call to update the cart quantity on page load
updateCartQuantity();

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    // When an "Add to Cart" button is clicked...
    button.addEventListener('click', () => {
      const productId = button.dataset.productId; // Get the product ID from the button's data attribute
      addToCart(productId); // Add the product to the cart using the addToCart function
      updateCartQuantity(); // Update the cart quantity display
    });
  });
