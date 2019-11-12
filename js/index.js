// entry


$("#test").text("Hello World from jQuery");

// Antal varor utskrivet på kundvagns-ikon
const cartManager = new CartManager();

function updateCartAmount(){
$(".badge").text(cartManager.getNumberOfItems());
}
updateCartAmount()
