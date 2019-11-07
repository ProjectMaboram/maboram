function addRow(cartItem, index) {
  // Hämta ett färdigbyggt template-objekt från HTML-filen
  let $newItem = $("#cart-template").clone(true, true);

  // Replace the HTML for the different parts
  $newItem.find("#template-description").html(cartItem.description);
  $newItem.find("#template-units").html(cartItem.units);
  $newItem.find("#template-price").html(cartItem.pricePerUnit);

  $newItem.attr("parentId", index);

  // We don't want multiple elements with the same id,
  // so remove them for the new item
  $newItem.removeAttr("id");
  $newItem.find("#template-description").removeAttr("id");
  $newItem.find("#template-units").removeAttr("id");
  $newItem.find("#template-price").removeAttr("id");

  $("#cart-items").append($newItem);
}

const cm = new CartManager();
cm.items.forEach((item, index) => {
  addRow(item, index);
});
