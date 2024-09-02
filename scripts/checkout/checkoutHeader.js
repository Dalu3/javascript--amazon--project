import {cart} from "../../data/cart.js"

export function renderCheckoutHeader (){
  let cartQuantity = 0;
  cart.forEach((cartItem)=> {
    cartQuantity += cartItem.quantity;
  });

  const checkoutHeaderHTML = `
<div class="checkout-header">
<div class="header-content">
  <!-- Left section of the header (Amazon logo) -->
  <div class="checkout-header-left-section">
    <!-- Link to return to the Amazon home page -->
    <a href="amazon.html">
      <!-- Amazon logo for larger screens -->
      <img class="amazon-logo" src="images/amazon-logo.png" />
      <!-- Amazon logo for smaller screens (mobile devices) -->
      <img
        class="amazon-mobile-logo"
        src="images/amazon-mobile-logo.png"
      />
    </a>
  </div>

  <!-- Middle section of the header (Checkout title and return link) -->
  <div class="checkout-header-middle-section">
    <!-- Checkout title with a link to return to the home page -->
    Checkout (<a
      class="return-to-home-link js-return-to-home-link"
      href="amazon.html"
    ></a
    >)
  </div>

  <!-- Right section of the header (Security lock icon) -->
  <div class="checkout-header-right-section">
    <!-- Icon indicating a secure checkout process -->
    <img src="images/icons/checkout-lock-icon.png" />
  </div>
</div>`;
document.querySelector('.js-checkout-header')
.innerHTML = checkoutHeaderHTML};
