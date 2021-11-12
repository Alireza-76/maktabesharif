$(document).ready(function () {
    $("#slide-up").click(function () {
        $(".box").slideUp();
    })
    $("#slide-down").click(function () {
        $(".box").slideDown();
    })
    $("#slide-toggle").click(function () {
        $(".box").slideToggle();
    })
})