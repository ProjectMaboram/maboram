// $(document).on("click", "#optionThemes input[type=radio]", () => {
//   console.log("Clicked a theme!");
// });

// Hanterar när man klickar på ramform - ser till att rätt etikett sätts på första måttet
// och att andra måttet döljs/visas som det ska
$(document).on("click", "#optionShapes input[type=radio]", e => {
  let sLbl = "";
  switch (event.target.id) {
    case "Rektangel":
      sLbl = "Bredd:";
      $("#secondMeasure").show();
      $("#txtSecondMeasurement").prop("required", true);

      break;

    case "Cirkel":
      sLbl = "Radie:";
      $("#secondMeasure").hide();
      $("#txtSecondMeasurement").prop("required", false);
      break;

    case "Triangel":
      sLbl = "Sida:";
      $("#secondMeasure").hide();
      $("#txtSecondMeasurement").prop("required", false);
      break;
  }

  $(lblFirstMeasurement).text(sLbl);
});

// Hanterar Nästa-knappen
$(document).on("submit", "#frmPren", e => {
  // Stop reloading the page
  e.preventDefault();

  let sMsr = "";
  let cm = new CartManager();

  let sInt = $("#intervall option:selected").text();
  let sTheme = $("#optionThemes input[type=radio]:checked").attr("id");
  let sShape = $("#optionShapes input[type=radio]:checked").attr("id");
  let price = $("#optionThemes input[type=radio]:checked").attr("price");

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

  // Skapa ett kundvagnsobjekt
  let item = new CartItem(
    "Prenumeration på " + sTheme + ", " + sInt + ", " + sShape + ", " + sMsr,
    1,
    price
  );

  // Lägg prenumerationen i kundvagnen
  cm.add(item);
});