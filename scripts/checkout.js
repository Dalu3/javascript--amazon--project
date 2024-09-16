import { renderOrderSummary } from '../scripts/checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart, loadCartFetch } from '../data/cart.js';
// import '../data/cart-class.js'
// import '../data/backend-practice.js';
// import '../data/car.js'


async function loadPage() {
  try{
    // throw'error1';
    
    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]);

  } catch(error){
    console.log('unexpected error. Please try again later.')
  }

  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader(); 
} 

loadPage()
/*
Promise.all([
    loadProductsFetch(),
    new Promise  ((resolve) => {
      loadCart(() => {
        resolve(); 
      });
    })

]).then((values) => {
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader(); 
});
*/
/*
new Promise((resolve) => {
loadProducts(() => {
resolve('value1');
});

}).then((value) => {
return new Promise  ((resolve) => {
  loadCart(() => {
    resolve();
  });
}); 

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader(); 
});

loadProducts(()=>{
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader(); 
  });
});*/
  
