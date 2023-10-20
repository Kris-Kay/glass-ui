/* ================================== */
/* jQuary load content */
/* ================================== */

(function () {
  "use strict";

  $(function () {
    $("#content").load("/html/home.html");
    // $("#content").load("/html/about.html");
    // $("#content").load("/html/documentation.html");
    // $("#content").load("/html/demo.html");
    // $("#content").load("/html/tutorial.html");

    $("#js-home").on( "click", function(event) {
      event.preventDefault();
      $(window).scrollTop(0);
      $("#content").load("/html/home.html");
    });

    $("#js-about").on( "click", function(event) {
      event.preventDefault();
      $(window).scrollTop(0);
      $("#content").load("/html/about.html");
    }); 

    // $("#js-demo").on( "click", function(event) {
    //   event.preventDefault();
    //   $(window).scrollTop(0);
    //   $("#content").load("/html/demo.html");
    // }); 

    // $("#js-tutorial").on( "click", function(event) {
    //   event.preventDefault();
    //   $(window).scrollTop(0);
    //   $("#content").load("/html/tutorial.html");
    // }); 
  });

  $(function () {
    $(".js-home").on( "click", function(event) {
      event.preventDefault();
      $(window).scrollTop(0);
      $("#content").load("/html/home.html");
    }); 
  });
})();
