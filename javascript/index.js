M.AutoInit();
$(document).ready(function () {

    $('.slider').slider({
        indicators: true,
        interval: 4000
    });

    $('.indicator-item').on( "click", function() {
        $('.slider').slider('pause')
      });
});

(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
    }); // end of document ready
  })(jQuery);







