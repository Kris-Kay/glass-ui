/* ================================== */
/* Responsive size range print out */
/* ================================== */

let timeout = false; // holder for timeout id
let delay = 100; // delay after event is "complete" to run callback

function cubeWidth() {
  const $allCubes = document.querySelectorAll(".js-sizeCube");
  const $cubesArray = Array.from($allCubes);

  $cubesArray.forEach((cube) => {
    let $w = cube.offsetWidth;
    let $span = cube.nextElementSibling.nextElementSibling;
    $span.innerText = `${$w}px`;
  });
}

// window.resize event listener
window.addEventListener("resize", function (event) {
  clearTimeout(timeout);
  timeout = setTimeout(cubeWidth, delay);
});

cubeWidth();