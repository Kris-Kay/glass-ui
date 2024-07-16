/* ========================================== */
/* HSL Color Picker */
/* ========================================== */
"use strict";

let $hSlider;
let $lSlider;
let $sSlider;
let $aSlider;
let $h;
let $l;
let $s;
let $a;
let $hsla;
let $colorSwatch;

/* update text color to make sure it contrasts with new color */
function textColorContrast() {
  if($l > 50 && $a > 0.4) {
    document.body.style.setProperty("--swatch-text-color", "205 20% 10%");
    // console.log("dark text");
  } else {
    document.body.style.setProperty("--swatch-text-color", "205 20% 90%");
    // console.log("light text");
  }
}

/* join slider values into hsla() string */
/* syntax example: hsla(360 50% 50% / 0.5) */
function getHSLAString() {
  $hsla =
      "hsla( " + [
      $h,
      $s + "%",
      $l + "%"
    ].join(" ")
      + " / " +
      $a
      + " )";


  /* messy but needed for generator */
  document.body.style.setProperty("--color-glass3d", `${$hsla}`);
  // console.log("colorPicker.js: " + $hsla);

  return $hsla;
}

/* create HTML element to display color value string */
function createColorHTML() {
  return [
    "<p id=\"text-color\">",
      getHSLAString(),
    "</p>"
  ].join("");
}

function handleSliderChange(e) {
  let $slider = e.target;
  let $sliderId = $slider.id;

  /* find the slider that changed and update the corresponding --var to its value */
  if($sliderId === "hsl-h") {
    $h = $hSlider.value;
    document.body.style.setProperty("--color-h", `${$h}`);

  } else if($sliderId === "hsl-l") {
    $l = $lSlider.value;
    document.body.style.setProperty("--color-l", `${$l}%`);
    textColorContrast();

  } else if($sliderId === "hsl-s") {
    $s = $sSlider.value;
    document.body.style.setProperty("--color-s", `${$s}%`);

  } else if($sliderId === "hsl-a") {
    $a = $aSlider.value;
    document.body.style.setProperty("--color-a", `${$a}`);
    textColorContrast();
  }

  /* update HTML display to reflect new color */
  $colorSwatch.innerHTML = createColorHTML();

  // console.log("$slider id: " + $sliderId);
}

/* add event listener to sliders */
function addSliderListener() {
  let $sliders = document.querySelectorAll('.js-colorSlider');

  $sliders.forEach(($slider) => {
    $slider.addEventListener("input", handleSliderChange, {
      capture : true,
    });
  });
}

function initColorPicker() {
  /* initial color values */
  $h = 190;
  $l = 70;
  $s = 90;
  $a = 0.1;

  $colorSwatch = document.getElementById("colorSwatch");

 /* init sliders */
  $hSlider = document.getElementById("hsl-h");
  $lSlider = document.getElementById("hsl-l");
  $sSlider = document.getElementById("hsl-s");
  $aSlider = document.getElementById("hsl-a");

  /* set initial slider values */
  $hSlider.value = $h;
  $lSlider.value = $l;
  $sSlider.value = $s;
  $aSlider.value = $a;

 /* set initial color values */
  document.body.style.setProperty("--color-h", `${$h}`);
  document.body.style.setProperty("--color-l", `${$l}%`);
  document.body.style.setProperty("--color-s", `${$s}%`);
  document.body.style.setProperty("--color-a", `${$a}`);

  addSliderListener();
  textColorContrast();
  $colorSwatch.innerHTML = createColorHTML();
}