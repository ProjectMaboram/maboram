$(document).on("click", "#optionThemes input[type=radio]", () => {
  console.log("Clicked a theme!");
});

// Hanterar när nan klickar på ranform - ser till att rätt etikett sätts på första måttet
// och att andra måttet döljs/visas som det ska
$(document).on("click", "#optionShapes input[type=radio]", e => {
  let sLbl = "";
  switch (event.target.id) {
    case "Rektangel":
      sLbl = "Bredd:";
      $("#secondMeasure").show();
      $("#txtSecondMeasurement").prop("required", true);
      console.log("rektangel!");

      break;

    case "Cirkel":
      sLbl = "Radie:";
      $("#secondMeasure").hide();
      $("#txtSecondMeasurement").prop("required", false);
      console.log("cirkel!");
      break;

    case "Triangel":
      sLbl = "Sida:";
      $("#secondMeasure").hide();
      $("#txtSecondMeasurement").prop("required", false);
      console.log("triangel!");
      break;
  }

  $(lblFirstMeasurement).text(sLbl);
});

// Hanterar Nästa-knappen
$(document).on("submit", "#frmPren", e => {
  // Stop reloading the page
  e.preventDefault();

  let sMsr = "";
  let ls = new LocalStorage();

  let sTheme = $("#optionThemes input[type=radio]:checked").attr("id");
  console.log("Valt tema: ", sTheme);

  let sInt = $("#intervall option:selected").text();
  console.log("Valt intervall: ", sInt);

  let sShape = $("#optionShapes input[type=radio]:checked").attr("id");
  console.log("Vald ramform: ", sShape);

  switch (sShape) {
    case "Rektangel":
      sMsr =
        "B:" +
        $("#txtFirstMeasurement").val() +
        ",H:" +
        $("#txtSecondMeasurement").val();
      break;

    case "Cirkel":
      sMsr = "R:" + $("#txtFirstMeasurement").val();
      break;

    case "Triangel":
      sMsr = "S:" + $("#txtFirstMeasurement").val();
      break;
  }

  console.log("Mått: ", sMsr);

  // Spara ner all info i local storage
  ls.set("prenumerationTema", sTheme);
  ls.set("prenumerationIntervall", sInt);
  ls.set("prenumerationRamform", sShape);
  ls.set("prenumerationMått", sMsr);
});
