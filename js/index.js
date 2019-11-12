// Antal varor utskrivet på kundvagns-ikon
const cartManager = new CartManager();

function updateCartAmount() {
  $(".badge").text(cartManager.getNumberOfItems());
}

updateCartAmount();
