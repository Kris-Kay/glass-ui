/* ========================================== */
/* Slider */
/* ========================================== */
function initSliders() {
  const $sliderGroups = document.querySelectorAll(".js-slider-w-display");

  $sliderGroups.forEach($group => {
    const $slider = $group.querySelector(".js-slider-ui");
    const $display = $group.querySelector(".js-value-display");

    $slider.addEventListener("input", event => {
      $display.setAttribute("data-length", event.target.value);
      progressDisplay(event.target, $display);
    });

    progressDisplay($slider, $display);
  });

  function progressDisplay($slider, $display) {
    const $progressColor = "hsla(190, 90%, 50%, 0.7)";
    const $bgcolor = "hsla(205, 20%, 10%, 0.25)";
    const $min = $slider.min ? $slider.min : 0;
    const $max = $slider.max ? $slider.max : 100;
    const $percent = (100 * ($slider.value - $min)) / ($max - $min);
    const $sliderW = $slider.offsetWidth;
    const $displayW = $display.offsetWidth;
    const $where = Math.round(($percent / 100) * ($sliderW - $displayW));

    const $gradient = `linear-gradient(90deg, ${$progressColor} ${$percent}%, ${$bgcolor} ${$percent + 0.1}%)`;

    $slider.style.background = $gradient;
    $display.setAttribute("data-length", $slider.value);
    $display.style.left = `${$where}px`;
  }
}