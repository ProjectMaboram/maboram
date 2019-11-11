$(document).on("click", "#optionThemes input[type=radio]", e => {
  $(".imgPreview").removeClass("NewYork");
  $(".imgPreview").removeClass("Paris");
  $(".imgPreview").removeClass("Stockholm");
  $(".imgPreview").addClass(e.target.id);
});

// Hanterar när man klickar på ramform - ser till att rätt etikett sätts på första måttet
// och att andra måttet döljs/visas som det ska
$(document).on("click", "#optionShapes input[type=radio]", e => {
  let sLbl = "";
  let sImg = "";

  $(".innertriangle").css("display", "none");

  switch (event.target.id) {
    case "rectangle":
      sLbl = "Bredd:";
      sImg = "frameSquareTrans.png";
      $("#secondMeasure").show();
      $("#txtSecondMeasurement").prop("required", true);

      break;

    case "circle":
      sLbl = "Radie:";
      sImg = "frameRoundTrans.png";
      $("#secondMeasure").hide();
      $("#txtSecondMeasurement").prop("required", false);
      break;

    case "triangle":
      sLbl = "Sida:";
      sImg = "frameTriangleTrans.png";

      $("#secondMeasure").hide();
      $(".innertriangle").css("display", "block");
      $("#txtSecondMeasurement").prop("required", false);
      break;
  }

  $(lblFirstMeasurement).text(sLbl);

  $(".imgPreview").removeClass("rectangle");
  $(".imgPreview").removeClass("circle");
  $(".imgPreview").removeClass("triangle");
  $(".imgPreview").addClass(event.target.id);
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
    case "rectangle":
      sMsr =
        "B:" +
        $("#txtFirstMeasurement").val() +
        ",H:" +
        $("#txtSecondMeasurement").val();
      break;

    case "circle":
      sMsr = "R:" + $("#txtFirstMeasurement").val();
      break;

    case "triangle":
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

  // Hoppa till kundvagnen
  window.location.href = "shopping-cart.html";
});
