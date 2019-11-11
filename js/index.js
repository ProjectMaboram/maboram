// entry


$("#test").text("Hello World from jQuery");

// Antal varor utskrivet på kundvagns-ikon
const cartManager = new CartManager();
$(".badge").text(cartManager.getNumberOfItems());
