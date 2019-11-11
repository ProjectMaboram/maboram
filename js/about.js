// Antal varor utskrivet på kundvagns-ikon
const cartManager = new CartManager();
$(".badge").text(cartManager.getNumberOfItems());