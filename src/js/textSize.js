/* ========================================== */
/*  Fluid typography Scale print out */
/* ========================================== */

let textSizeTimeout = false;
let textSizeDelay = 300; // delay after event is "complete" to run callback

function textSize() {
  const $allText = document.querySelectorAll(".js-textSize");
  const $textArray = Array.from($allText);

  $textArray.forEach((text) => {
    let $size = window.getComputedStyle(text).getPropertyValue('font-size');
    let $parsedSize = parseInt($size);
    // console.log($size);
    // console.log($parsedSize);
    let $span = text.parentNode.querySelector("span");
    $span.innerText = `${$parsedSize}px`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  clearTimeout(textSizeTimeout);
  timeout = setTimeout(textSize, textSizeDelay);
});

window.addEventListener("resize", () =>
{
  clearTimeout(textSizeTimeout);
  timeout = setTimeout(textSize, textSizeDelay);
});
