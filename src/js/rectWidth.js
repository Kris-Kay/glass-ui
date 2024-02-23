/* ========================================== */
/* Responsive size range print out */
/* ========================================== */

let widthTimeout = false;
let widthDelay = 300; // delay after event is "complete" to run callback

function rectWidth() {
  const $allRects = document.querySelectorAll(".js-sizeRect");
  const $rectsArray = Array.from($allRects);

  $rectsArray.forEach((rect) => {
    let $w = rect.offsetWidth;
    // console.log("width:" + $w);
    let $span = rect.nextElementSibling.nextElementSibling;
    $span.innerText = `${$w}px`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  clearTimeout(widthTimeout);
  timeout = setTimeout(rectWidth, widthDelay);
});

window.addEventListener("resize", () =>
{
  clearTimeout(widthTimeout);
  timeout = setTimeout(rectWidth, widthDelay);
});
