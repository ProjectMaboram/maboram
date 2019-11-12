function addRow(cartItem) {
  // Hämta ett färdigbyggt template-objekt från HTML-filen
  let $newItem = $("#cart-template").clone(true, true);

  // Replace the HTML for the different parts
  $newItem.find("#template-description").html(cartItem.description);
  $newItem.find("#template-units").html(cartItem.units);
  $newItem.find("#template-price").html(cartItem.pricePerUnit);
  $newItem.find("#template-price").html(cartItem.pricePerUnit);
  $newItem
    .find("#template-totPrice")
    .html(cartItem.units * cartItem.pricePerUnit);

  $newItem.attr("parentId", cartItem.id);

  // We don't want multiple elements with the same id,
  // so remove them for the new item
  $newItem.removeAttr("id");
  $newItem.find("#template-description").removeAttr("id");
  $newItem.find("#template-price").removeAttr("id");

  // Change the id to unit plus item id
  $newItem.find("#template-units").attr("id", "unit" + cartItem.id);

  // Change the id to totPrice + item id
  $newItem.find("#template-totPrice").attr("id", "totPrice" + cartItem.id);

  $("#cart-items").append($newItem);
}

const cm = new CartManager();
let gt = 0;

cm.items.forEach(item => {
  gt += item.units * item.pricePerUnit;
  addRow(item);
});

$("#grand-total").text(gt);

$(".btnDelete").on("click", function(e) {
  let pId = $(e.target)
    .parent()
    .parent()
    .attr("parentId");

  $(e.target)
    .parent()
    .parent()
    .remove();

  let item = cm.get(pId);
  cm.removeItem(pId);

  gt -= item.units * item.pricePerUnit;
  $("#grand-total").text(gt);
});

$(".btnPlus").on("click", function(e) {
  let pId = $(e.target)
    .closest("[parentId]")
    .attr("parentId");

  let item = cm.get(pId);

  item.units++;

  cm.updateItem(pId, item);
  $("#unit" + pId).text(item.units);
  $("#totPrice" + pId).text(item.units * item.pricePerUnit);
  gt += Number(item.pricePerUnit);
  $("#grand-total").text(gt);
});

$(".btnMinus").on("click", function(e) {
  let pId = $(e.target)
    .parent()
    .parent()
    .parent()
    .attr("parentId");

  let item = cm.get(pId);
  if (item.units > 0) {
    item.units--;
    cm.updateItem(pId, item);
    $("#unit" + pId).text(item.units);
    $("#totPrice" + pId).text(item.units * item.pricePerUnit);
    gt -= item.pricePerUnit;
    $("#grand-total").text(gt);
  }
});

$("#btnCheckout").on("click", function(e) {
  // Hoppa till kontaktformuläret
  window.location.href = "contact.html";
});
