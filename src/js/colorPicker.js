/* ========================================== */
/* HSL Color Picker */
/* ========================================== */
let colorSliderTimeout;

let $colorPicker;
let $colorSwatch;

let $computed;

let $hVal;
let $lVal;
let $sVal;
let $aVal;

let $hSlider;
let $lSlider;
let $sSlider;
let $aSlider;

/* make text color contrast against swatch color */
function textColorContrast() {
  if($lSlider.value > 60) {
    document.body.style.setProperty("--swatch-text-color", "205 20% 10%");
  } else {
    document.body.style.setProperty("--swatch-text-color", "205 20% 90%");
  }
}


function handleSliderChange(e) {
  clearTimeout(colorSliderTimeout);

  colorSliderTimeout = setTimeout(() => {
    let $slider = e.target;
    let $sliderId = $slider.id;

    /* find the slider that changed and update the corresponding --var to its value */
    if($sliderId === "hsl-h") {
      document.body.style.setProperty("--color-h", `${$slider.value}`);

    } else if($sliderId === "hsl-l") {
      document.body.style.setProperty("--color-l", `${$slider.value}%`);

    } else if($sliderId === "hsl-s") {
      document.body.style.setProperty("--color-s", `${$slider.value}%`);

    } else if($sliderId === "hsl-a") {
      document.body.style.setProperty("--color-a", `${$slider.value}`);
    }

    /* update HTML display to reflect new color */
    /* update text color to make sure it contrasts with new color */
    textColorContrast();
    $colorSwatch.innerHTML = createColorHTML();

    console.log("$slider id: " + $slider.id);
  }, 100);
}


/* join slider values into hsl() string */
/* syntax example: hsl(360 50% 50% / 0.5) */
function getHSLAString() {
  let $h = document.getElementById("hsl-h").value;
  let $l = document.getElementById("hsl-l").value;
  let $s = document.getElementById("hsl-s").value;
  let $a = document.getElementById("hsl-a").value;

  let $hsla =
      "hsl( " + [
      $h,
      $s + "%",
      $l + "%"
    ].join(" ")
      + " / " +
      $a
      + " )";

  // console.log("colorPicker.js " + $hsla);
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


function initColorPicker() {

    $colorPicker = document.getElementById("js-colorPicker");
    $colorSwatch = document.getElementById("colorSwatch");

    /* get body's computed style to access its CSS --vars */
    $computed = window.getComputedStyle(document.body);

    $hVal = $computed.getPropertyValue("--color-h");
    $lVal = $computed.getPropertyValue("--color-l");
    $sVal = $computed.getPropertyValue("--color-s");
    $aVal = $computed.getPropertyValue("--color-a");

    $hSlider = document.getElementById("hsl-h");
    $lSlider = document.getElementById("hsl-l");
    $sSlider = document.getElementById("hsl-s");
    $aSlider = document.getElementById("hsl-a");

    /* use --vars to set initial slider values */
    $hSlider.value = $hVal;
    $lSlider.value = $lVal;
    $sSlider.value = $sVal;
    $aSlider.value = $aVal;

    /* reset the saturation and lightness --vars with a `%` or Safari will throw a fit */
    document.body.style.setProperty("--color-h", `${$hVal}`);
    document.body.style.setProperty("--color-l", `${$lVal}%`);
    document.body.style.setProperty("--color-s", `${$sVal}%`);
    document.body.style.setProperty("--color-a", `${$aVal}`);

    /* give sliders an event listener */
    $colorPicker.querySelectorAll('.js-colorSlider').forEach(($slider) => {
      $slider.addEventListener("input", handleSliderChange);
    });

    /* update HTML value display & its text color */
    $colorSwatch.innerHTML = createColorHTML();
    textColorContrast();


  // function setInitialValues() {
  //   $colorPicker = document.getElementById("js-colorPicker");
  //   $colorSwatch = document.getElementById("colorSwatch");

  //   /* get body's computed style to access its CSS --vars */
  //   $computed = window.getComputedStyle(document.body);

  //   $hVal = $computed.getPropertyValue("--color-h");
  //   $lVal = $computed.getPropertyValue("--color-l");
  //   $sVal = $computed.getPropertyValue("--color-s");
  //   $aVal = $computed.getPropertyValue("--color-a");

  //   $hSlider = document.getElementById("hsl-h");
  //   $lSlider = document.getElementById("hsl-l");
  //   $sSlider = document.getElementById("hsl-s");
  //   $aSlider = document.getElementById("hsl-a");

  //   /* use --vars to set initial slider values */
  //   $hSlider.value = $hVal;
  //   $lSlider.value = $lVal;
  //   $sSlider.value = $sVal;
  //   $aSlider.value = $aVal;

  //   /* reset the saturation and lightness --vars with a `%` or Safari will throw a fit */
  //   document.body.style.setProperty("--color-h", `${$hVal}`);
  //   document.body.style.setProperty("--color-l", `${$lVal}%`);
  //   document.body.style.setProperty("--color-s", `${$sVal}%`);
  //   document.body.style.setProperty("--color-a", `${$aVal}`);

  //   /* give sliders an event listener */
  //   $colorPicker.querySelectorAll('.js-colorSlider').forEach(($slider) => {
  //     $slider.addEventListener("input", handleSliderChange);
  //   });

  //   /* update HTML value display & its text color */
  //   $colorSwatch.innerHTML = createColorHTML();
  //   textColorContrast();
  // }
  // setInitialValues();

}
