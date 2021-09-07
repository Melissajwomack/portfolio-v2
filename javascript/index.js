//Initialize materialize javascript elements
M.AutoInit();

//Wait for document to load
document.addEventListener("DOMContentLoaded", function () {
    isredirect = window.location.search.substr(1);

    //Initialize slider on index page
    var elems = document.querySelectorAll(".slider");
    var instance = M.Slider.init(elems, {
        //slider options
        indicators: false,
        duration: 300,
        interval: 10000
    });

    //Initialize sidenav
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {
        //sidenave options
        draggable: true
    });

    //Initialize parallax
    $(".parallax").parallax();

    //Pause slider function
    function pause() {
        $(".slider").slider("pause");
    }

    //Function to make slider go to contact me slide
    function goToContact() {
        var index = $(".slider").find(".active").index();
        var name = $(".name").index();
        var about = $(".about").index();
        var contact = $(".contact").index();

        switch (index) {
            case name:
                $(".slider").slider("prev");
                pause();
                break;
            case about:
                $(".slider").slider("next");
                pause();
                break;
            case contact:
                pause();
                break;
        };

        document.title = "Melissa Womack | Contact";
    };

    //Function to make slider go to about me slide
    function goToAbout() {
        var index = $(".slider").find(".active").index();
        var name = $(".name").index();
        var about = $(".about").index();
        var contact = $(".contact").index();

        switch (index) {
            case name:
                $(".slider").slider("next");
                pause();
                break;
            case about:
                pause();
                break;
            case contact:
                $(".slider").slider("prev");
                pause();
                break;
        };

        document.title = "Melissa Womack | About";
    };

    //If user is being redirected from portfolio page, check parameter and display the appropriate slide
    if(isredirect){
        switch (isredirect) {
            case "about":
                goToAbout();
                $(".sidenav").sidenav("close");
                document.title = "Melissa Womack | About";
                break;
            case "contact":
                goToContact();
                $(".sidenav").sidenav("close");
                document.title = "Melissa Womack | Contact";
                break;
        }
    }

    //On click event for nav bar that brings user to about me slide
    $(".aboutme").on("click", function () {
        goToAbout();
        $(".sidenav").sidenav("close");
    });

    //On click event for nav bar that brings user to contact me slide
    $(".contactme").on("click", function () {
        goToContact();
        $(".sidenav").sidenav("close");
    });

    //On click event for nav bar that opens PDF of resume
    $(".resume").on("click", function() {
        $(".sidenav").sidenav("close");
    })

    //Relocate to index.html page with a paramter so that the slider will display the about page
    $(".aboutmePort").on("click", function () {
        window.location.replace("index.html?about");
    });

    //Relocate to index.html page with a paramter so that the slider will display the contact page
    $(".contactmePort").on("click", function () {
        window.location.replace("index.html?contact");
    });

});








