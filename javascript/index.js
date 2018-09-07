M.AutoInit();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instance = M.Slider.init(elems, {
        indicators: true,
        interval: 4000

    });

    $(".aboutme").on("click", function (event) {
        var index = $(".slider").find('.active').index();
        var name = $(".name").index();
        var about = $(".about").index();
        var contact = $(".contact").index();

        switch(index) {
            case name:
            $('.slider').slider('next');
            break;
            case about:
            $('.slider').slider('pause');
            break;
            case contact:
            $('.slider').slider('prev');
            break;
        }
    });

    $(".contactme").on("click", function (event) {
        var index = $(".slider").find('.active').index();
        var name = $(".name").index();
        var about = $(".about").index();
        var contact = $(".contact").index();

        switch(index) {
            case name:
            $('.slider').slider('prev');
            break;
            case about:
            $('.slider').slider('next');
            break;
            case contact:
            $('.slider').slider('pause');
            break;
        }
    });

});



(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    });
})(jQuery);







