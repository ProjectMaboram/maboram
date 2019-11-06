$(document).on("click", "#optionThemes input[type=radio]", () => {
  console.log("Clicked a theme!");
});

$(document).on("click", "#optionShapes input[type=radio]", e => {
  console.log("Clicked a shape!", $(e.target));
});
