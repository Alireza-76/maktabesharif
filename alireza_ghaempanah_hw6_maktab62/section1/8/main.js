
$(".title-box").click(function () {
    $(".content-box").hide()
    $(".fa-caret-down").attr('class', 'fas fa-caret-right');

    $(".content-box",$(this)).fadeIn('slow');
    $(".fas",$(this)).attr('class', 'fas fa-caret-down');

});