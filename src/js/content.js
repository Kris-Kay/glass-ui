/* ================================== */
/* jQuary load content */
/* ================================== */

(function () {
  "use strict";

  $(function () {
    // $("#content").load("/home.html");
    // $("#content").load("/about.html");
    // $("#content").load("/demo.html");
    $("#content").load("/tutorial.html");

    $("#js-home").on( "click", function(event) {
      event.preventDefault();
      $(window).scrollTop(0);
      $("#content").load("/home.html");
    });

    $("#js-about").on( "click", function(event) {
      event.preventDefault();
      $(window).scrollTop(0);
      $("#content").load("/about.html");
    }); 

    $("#js-demo").on( "click", function(event) {
      event.preventDefault();
      $(window).scrollTop(0);
      $("#content").load("/demo.html");
    }); 

    // $("#js-tutorial").on( "click", function(event) {
    //   event.preventDefault();
    //   $(window).scrollTop(0);
    //   $("#content").load("/tutorial.html");
    // }); 
  });
})();
