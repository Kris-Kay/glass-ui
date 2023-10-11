/* ================================== */
/* jQuary load content */
/* ================================== */

  $(function () {
    $(".js-tutorial").on( "click", function(event) {
      event.preventDefault();
      $("#content").load("/html/tutorial.html");
      $(window).scrollTop(0);
    }); 
  });

  $(function () {
    $(".js-demo").on( "click", function(event) {
      event.preventDefault();
      $(window).scrollTop(0);
      $("#content").load("/html/demo.html");
    }); 
  });