/* ================================== */
/* jQuary load content */
/* ================================== */

(function () {
  "use strict";

  $(function () {
    $("#content").load("/home-copy.html");

    $("#js-demo").on( "click", function(event) {
      event.preventDefault();
      $("#content").load("/demo-copy.html");
    }); 

    $("#js-tutorial").on( "click", function(event) {
      event.preventDefault();
      $("#content").load("/tutorial.html");
    }); 

    $("#js-home").on( "click", function(event) {
      event.preventDefault();
      $("#content").load("/home-copy.html");
    });
  });
})();