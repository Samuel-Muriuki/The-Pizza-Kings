// B/S Logic
//toggle between showing and hidding cart
$(document).ready(function () {
    $("#cart").click(function () {
        $(".formArea").toggle();
    });
});

$(document).ready(function () {
    $("#checkout").click(function () {
        $(".deliver").show();
        $(".pickUp").show();
    });
});
//Deliver
$(".deliver").click(function () {
    $(".summary").show();
    $(".deliver").hide();
    $(".makeDelivery").show();
});