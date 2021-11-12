$(".dropdown").hide();

$(".dpdown").mouseover(function () {
    $(".dropdown",$(this)).slideDown('slow');
});

$(".dpdown").mouseleave(function () {
    $(".dropdown",$(this)).slideUp('slow');
});