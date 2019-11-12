const carouselPrev = id => $(id).carousel("prev");
const carouselNext = id => $(id).carousel("next");

let frameTop = "straight",
  frameBot = "invard",
  frameRight = "spikes",
  frameLeft = "bubble";

$(document).ready(() => {
  $(".carousel").carousel("pause");
});

$("#btn-next").click(() => {
  let itemText = `FR: ${frameRight}, FL: ${frameLeft}, FT: ${frameTop}, FB: ${frameBot}`;
  let item = new CartItem("egen-designad-ram : " + itemText, 1, 850);
  cartManager.add(item);
  window.location.href = "shopping-cart.html";
});

const getFrameName = idx => {
  switch (idx) {
    case 0:
      return "spikes";
      break;
    case 1:
      return "bubble";
      break;
    case 2:
      return "straight";
      break;
    case 3:
      return "invard";
      break;
  }
};

$("#carousel-top").on("slid.bs.carousel", props => {
  frameTop = getFrameName(props.from);
});

$("#carousel-bot").on("slid.bs.carousel", props => {
  frameBot = getFrameName(props.from);
});

$("#carousel-left").on("slid.bs.carousel", props => {
  frameLeft = getFrameName(props.from);
});

$("#carousel-right").on("slid.bs.carousel", props => {
  frameRight = getFrameName(props.from);
});
