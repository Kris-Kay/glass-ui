/* ================================== */
/* jQuary load content */
/* ================================== */

  $(function () {
    $(".js-tutorial").on( "click", function(event) {
      event.preventDefault();
      $("#content").load("/tutorial.html");
      $(window).scrollTop(0);
    }); 
  });

