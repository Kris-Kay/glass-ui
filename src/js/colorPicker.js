/* ========================================== */
/* HSL Color Picker */
/* ========================================== */
function initColorPicker() {
  console.clear();

  const $colorPicker = document.getElementById("picker");
  const $colorSwatch = document.getElementById("colorSwatch");

  let $hSlider = document.getElementById("hsl-h");
  let $lSlider = document.getElementById("hsl-l");
  let $sSlider = document.getElementById("hsl-s");
  let $aSlider = document.getElementById("hsl-a");


  function setInitialValues() {
    /* get color picker's computed style to access its CSS --vars */
    let $computedPicker = getComputedStyle($colorPicker);
    let $hVal = $computedPicker.getPropertyValue("--color-h");
    let $lVal = $computedPicker.getPropertyValue("--color-l");
    let $sVal = $computedPicker.getPropertyValue("--color-s");
    let $aVal = $computedPicker.getPropertyValue("--color-a");

    /* use --vars to set initial slider values */
    $hSlider.value = $hVal;
    $lSlider.value = $lVal;
    $sSlider.value = $sVal;
    $aSlider.value = $aVal;

    /* reset the saturation and lightness --vars with a `%` or Safari will throw a fit */
    $colorPicker.style.setProperty("--color-l", `${$lVal}%`);
    $colorPicker.style.setProperty("--color-s", `${$sVal}%`);

    /* update HTML value display & its text color */
    setTextColor();
    $colorSwatch.innerHTML = createColorHTML();

    /* give sliders an event listener */
    $colorPicker.querySelectorAll('.js-colorSlider').forEach(($slider) => {
      $slider.addEventListener("input", handleSliderChange);
    });
  }
  setInitialValues();


  function handleSliderChange(e) {
    let $slider = e.target;
    let $sliderId = $slider.id;

    /* find the slider that changed and update the corresponding --var to its value */
    if($sliderId === "hsl-h") {
      $colorPicker.style.setProperty("--color-h", `${$slider.value}`);

    } else if($sliderId === "hsl-l") {
      $colorPicker.style.setProperty("--color-l", `${$slider.value}%`);

    } else if($sliderId === "hsl-s") {
      $colorPicker.style.setProperty("--color-s", `${$slider.value}%`);

    } else if($sliderId === "hsl-a") {
      $colorPicker.style.setProperty("--color-a", `${$slider.value}`);
    }

    /* update HTML display to reflect new color */
    /* update text color to make sure it contrasts with new color */
    setTextColor();
    $colorSwatch.innerHTML = createColorHTML();
  }

  /* make text color contrast against swatch color */
  function setTextColor() {
    if($lSlider.value > 42) {
      $colorPicker.style.setProperty("--swatch-text-color", "#000");
    } else {
      $colorPicker.style.setProperty("--swatch-text-color", "#fff");
    }
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

    console.log($hsla);
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
}
