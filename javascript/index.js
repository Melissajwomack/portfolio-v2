M.AutoInit();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instance = M.Slider.init(elems, {
        indicators: false,
        interval: 4000

    });

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        draggable: true
    });

    $('.parallax').parallax();

    function pause() {
        $('.slider').slider('pause');
    }

    function goToContact() {
        var index = $(".slider").find('.active').index();
        var name = $(".name").index();
        var about = $(".about").index();
        var contact = $(".contact").index();

        switch (index) {
            case name:
                $('.slider').slider('prev');
                pause();
                break;
            case about:
                $('.slider').slider('next');
                pause();
                break;
            case contact:
                $('.slider').slider('pause');
                break;
        };
    };

    function goToAbout() {
        var index = $(".slider").find('.active').index();
        var name = $(".name").index();
        var about = $(".about").index();
        var contact = $(".contact").index();

        switch (index) {
            case name:
                $('.slider').slider('next');
                pause();
                break;
            case about:
                $('.slider').slider('pause');
                break;
            case contact:
                $('.slider').slider('prev');
                pause();
                break;
        };
    };

    $(".aboutme").on("click", function () {
        goToAbout();
        $('.sidenav').sidenav('close');
    });

    $(".contactme").on("click", function () {
        goToContact();
        $('.sidenav').sidenav('close');
    });
});








