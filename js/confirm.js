let user = JSON.parse(localStorage.getItem("user"))
$("#given-name").text(user.firstname)
$("#last-name").text(user.lastname)
$("#adress").text(user.address)
$("#zip").text(user.zip)
$("#city").text(user.city)

$("#btnConfirm").on("click", function() {
    $("#cart").hide()
    $("#details").hide()
    $("#response").css({
        "display":"flex",
        "justify-content":"center"
    })
    $("#btnConfirm").text("Tillbaka")
})