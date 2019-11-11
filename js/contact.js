const body = $("body");
const formSection = $("#formContact");

$(document).on('click', '#submit', () =>{
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const address = $('#address').val();
    const co = $('#co').val();
    const zip = $('#zip').val();
    const city = $('#city').val();
   

    const newInfo = $('<section>')
    newInfo.append(`<p>Förnamn: ${firstName}</p>`)
    newInfo.append(`<p>Efternamn: ${lastName}</p>`)
    newInfo.append(`<p>Adress: ${address}</p>`);
    newInfo.append(`<p>C/o: ${co}</p>`)
    newInfo.append(`<p>Porst nr: ${zip}</p>`)
    newInfo.append(`<p>Stad: ${city}</p>`)
    
    formSection.append(newInfo);
    emptyContactForm();
});

function emptyContactForm() {
    $('#contactForm input').val('');
}
$(document).ready(function() {
    $("#submit").click(function () {
        $("#contactForm").toggle();
        $("#confirm").toggle();
        $("#submit").toggle();
        $("#cancel").toggle();
    });
});

$(document).ready(function () {
    $("#cancel").click(function () {
      emptyContactForm()
      
    })
});



/* Localstorage */
function getFirstName() {
  const input = document.querySelector("#firstName");
  return input.value;
}

function getLastName() {
  const input = document.querySelector("#lastName");
  return input.value;
}
function getAddress() {
  const input = document.querySelector("#address");
  return input.value;
}
function getCo() {
  const input = document.querySelector("#co");
  return input.value;
}
function getZip() {
  const input = document.querySelector("#zip");
  return input.value;
}
function getCity() {
  const input = document.querySelector("#city");
  return input.value;
}
function loadNames() {
  const firstName = localStorage.getItem("first");
  const lastName = localStorage.getItem("last");
  const address = localStorage.getItem("address");
  const co = localStorage.getItem("co");
  const zip = localStorage.getItem("zip");
  const city = localStorage.getItem("city");

  document.querySelector("#firstName").value = firstName;
  document.querySelector("#lastName").value = lastName;
  document.querySelector("#address").value = address;
  document.querySelector("#co").value = co;
  document.querySelector("#zip").value = zip;
  document.querySelector("#city").value = city;
}

loadNames();

const button = document.querySelector("#submit");

button.addEventListener("click", () => {
  localStorage.setItem("first", getFirstName());
  localStorage.setItem("last", getLastName());
  localStorage.setItem("address", getAddress());
  localStorage.setItem("co", getCo());
  localStorage.setItem("zip", getZip());
  localStorage.setItem("city", getCity());
});   /* /Localstorage */
