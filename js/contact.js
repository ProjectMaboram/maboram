const body = $('body')
const formSection = $('#formContact')

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
  $("#submit").click(function() {
      $("#contactForm").toggle();
      $("#confirm").toggle();
      $("#submit").toggle();
  });
});
