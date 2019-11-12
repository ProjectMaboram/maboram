const carouselPrev = id => $(id).carousel("prev");
const carouselNext = id => $(id).carousel("next");

function getCurrentFrame(id) {
  return $("#carousel-top")[0].getElementsByClassName("carousel-inner");
}

$(document).ready(() => {
  $(".carousel").carousel("pause");
});

$("#btn-next").click(() => {
  console.log(getCurrentFrame("#carousel-top"));
});
