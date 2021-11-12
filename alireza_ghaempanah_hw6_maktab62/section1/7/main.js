$(document).ready(function () {
    $("#add").click(function () {
        var progressBarWidth = $(".progress-bar").width(); // parent element
        var progressWidth = Number(($(".progress").width()/progressBarWidth * 100).toFixed());

        if (progressWidth + 10 > 100)
        {
            return;
        }
        
        progressWidth += 10;
        
        $(".progress").css('width', progressWidth + '%');
    })
})