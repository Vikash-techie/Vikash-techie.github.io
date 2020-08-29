(function($) {
    "use strict"; // Start of use strict


    // Smooth scrolling using jQuery easing
    $('a.scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });



    // Active navbar item in yellow color
    $('body').scrollspy({
      target: '#navbar',
      offset: 54
    });



    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
      if ($("#navbar").offset().top > 100) {
        $("#navbar").addClass("navbar-shrink");
      } else {
        $("#navbar").removeClass("navbar-shrink");
      }
    });
  })(jQuery); // End of use strict
