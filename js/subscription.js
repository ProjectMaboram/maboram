$(document).on("click", "#optionThemes input[type=radio]", () => {
  console.log("Clicked a theme!");
});

$(document).on("click", "#optionShapes input[type=radio]", e => {
  let sLbl = "";
  switch (event.target.id) {
    case "s1":
      sLbl = "Bredd:";
      $("#secondMeasure").show();
      console.log("rektangel!");

      break;

    case "s2":
      sLbl = "Radie:";
      $("#secondMeasure").hide();
      console.log("cirkel!");
      break;

    case "s3":
      sLbl = "Sida:";
      $("#secondMeasure").hide();
      console.log("triangel!");
      break;
  }

  $(lblFirstMeasurement).text(sLbl);
});
