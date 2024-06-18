/* ========================================== */
/* 3d glass generator */
/* ========================================== */
let $glassGenerator;
let $bevelValue;
let $colorValue;
let $shadowValue;
let $noiseValue;
let $filterValue;
let $blurValue;
let $brightValue;
let $satuValue;


function findSliderGroups() {
  const $allSliderGroups = document.querySelectorAll(".slider-group");

  $allSliderGroups.forEach($group => {
    const $sliderInput = $group.querySelector(".slider-input");
    const $sliderValue = $group.querySelector(".slider-value");

    setSliderValue($sliderInput, $sliderValue);

    $sliderInput.addEventListener("input", () => {
      setSliderValue($sliderInput, $sliderValue);
    });
  });
}


function setSliderValue($sliderInput, $sliderValue) {
  const $sliderW = $sliderInput.offsetWidth;
  const $valueW = $sliderValue.offsetWidth;
  const $val = $sliderInput.value;
  const $min = $sliderInput.min ? $sliderInput.min : 0;
  const $max = $sliderInput.max ? $sliderInput.max : 100;
  const $deciVal = Number(($val - $min) / ($max - $min));
  const $place = Math.round($deciVal * ($sliderW - $valueW));

  $sliderValue.style.left = `${$place}px`;
  $sliderValue.innerHTML = $val;
}


/* Find what switch was changed & set its layer's on/off value */
function setGlassValues($id, $isOn) {
  console.log($id + " is ON " + $isOn);

  if($id == "js-bevelSwitch") {
    if($isOn) {
      $bevelValue = document.querySelector('input[name="bevels"]:checked').value;
    } else {
      $bevelValue = `none`;
    }

    $glassGenerator.style.setProperty("--bevel-gen", `${$bevelValue}`);

    // console.log("bevel value: " + $bevelValue);
  }

  if($id == "js-shadowSwitch") {
    if($isOn) {
      $shadowValue = document.querySelector('input[name="shadows"]:checked').value;
    } else {
      $shadowValue = `none`;
    }

    $glassGenerator.style.setProperty("--shadow-gen", `${$shadowValue}`);

    // console.log("shadow value: " + $shadowValue);
  }

  if($id == "js-noiseSwitch") {
    if($isOn) {
      $noiseValue = document.querySelector('input[name="noise"]:checked').value;
    } else {
      $noiseValue = `none`;
    }

    $glassGenerator.style.setProperty("--noise-gen", `${$noiseValue}`);

    // console.log("noise value: " + $noiseValue);
  }

  if($id == "js-colorSwitch") {
    if($isOn) {
      $colorValue = document.querySelector('input[name="color"]:checked').value;
    } else {
      $colorValue = `none`;
    }

    $glassGenerator.style.setProperty("--color-gen", `${$colorValue}`);

    // console.log("color value: " + $colorValue);
  }

  if($id == "js-filterSwitch") {
    if($isOn) {
      $filterValue = `blur(var(--blur-gen)) brightness(var(--bright-gen)) saturate(var(--satu-gen))`;
    } else {
      $filterValue = `none`;
      $blurValue = `0px`;
    }

    $glassGenerator.style.setProperty("--filter-gen", `${$filterValue}`);

    // console.log("filter value: " + $filterValue);
  }

  if($id == "blur-filter") {
    if($isOn) {
      $blurValue = document.getElementById('blur-slider').value;
    } else {
      $blurValue = `0px`;
    }

    $glassGenerator.style.setProperty("--blur-gen", `${$blurValue}px`);

    console.log("blur value: " + $blurValue);
  }
}


function setSwitch($switch, $checked) {
  let $switchId = $switch.id;
  let $switchParents = $switch.parentNode.parentNode.parentNode;
  let $switchGroup = $switchParents.querySelector(".js-switchGroup");
  let $contentToggle  = $switchParents.querySelector(".js-content-toggle");

// console.log($switch);
// console.log($switchId + " is checked? " + $checked);
// console.log($switchId + " is aria checked " + $ariaChecked);


  if($checked) {
    $switch.ariaChecked = "true";
    $switchGroup.classList.remove("is-off");
    $contentToggle.removeAttribute("disabled");
    setGlassValues($switchId, true);

    // console.log($switchId + " is now ON");

  } else {
    $switch.ariaChecked = "false";
    $switchGroup.classList.add("is-off");
    $contentToggle.setAttribute("disabled", true);
    setGlassValues($switchId, false);

    // console.log($switchId + " is now OFF");
  }

}

function onSwitchChange(e) {
  $switch = e.target;
  let $checked = $switch.checked;
  setSwitch($switch, $checked);
}

function initializeGenerator() {
  $glassGenerator = document.getElementById("glass-generator");

  /* Accordion Switches */
  document.querySelectorAll(".js-accordionSwitch").forEach(($switch) => {
    let $checked = $switch.checked;
    setSwitch($switch, $checked);
    $switch.addEventListener("change", onSwitchChange);
  });

  /* Bevels */
  document.querySelectorAll('input[name="bevels"]').forEach(($radio) => {
    $radio.addEventListener("change", (e) => {
      $bevelValue = e.target.value;
      $glassGenerator.style.setProperty("--bevel-gen", `${e.target.value}`);
      // console.log(`Bevel: ${e.target.value}`);
    });
  });

  /* Shadows*/
  document.querySelectorAll('input[name="shadows"]').forEach(($radio) => {
    $radio.addEventListener("change", (e) => {
      $shadowValue = e.target.value;
      $glassGenerator.style.setProperty("--shadow-gen", `${e.target.value}`);
      // console.log(`Shadow: ${e.target.value}`);
    });
  });

  /* Noise */
  document.querySelectorAll('input[name="noise"]').forEach(($radio) => {
    $radio.addEventListener("change", (e) => {
      $noiseValue = e.target.value;
      $glassGenerator.style.setProperty("--noise-gen", `${e.target.value}`);
      // console.log(`Noise: ${e.target.value}`);
    });
  });

  /* Color */
  document.querySelectorAll('input[name="color"]').forEach(($radio) => {
    $radio.addEventListener("change", (e) => {
      $colorValue = e.target.value;
      $glassGenerator.style.setProperty("--color-gen", `${e.target.value}`);
      // console.log(`color: ${e.target.value}`);
    });
  });

  /* Filter checkboxes */
  document.querySelectorAll(".js-filter-value-switch").forEach(($filterSwitch) => {
    let $checked = $filterSwitch.checked;
    let $filterSwitchId = $filterSwitch.id;

    setGlassValues($filterSwitchId, $checked);
    $filterSwitch.addEventListener("change", setGlassValues($filterSwitchId, $checked));

      // $blurValue = document.getElementById('blur-filter-range').value;
  });

  findSliderGroups();

  // document.onreadystatechange = () => {
  //   if (document.readyState === "complete") {

  //   }
  // };
};








/////////
// Range Slider Properties.
// Fill : The trailing color that you see when you drag the slider.
// background : Default Range Slider Background
// const sliderProps = {
// 	fill: "#0B1EDF",
// 	background: "rgba(255, 255, 255, 0.214)",
// };

// // Selecting the Range Slider container which will effect the LENGTH property of the password.
// const slider = document.querySelector(".range__slider");

// // Text which will show the value of the range slider.
// const sliderValue = document.querySelector(".length__title");

// // Using Event Listener to apply the fill and also change the value of the text.
// slider.querySelector("input").addEventListener("input", event => {
// 	sliderValue.setAttribute("data-length", event.target.value);
// 	applyFill(event.target);
// });
// // Selecting the range input and passing it in the applyFill func.
// applyFill(slider.querySelector("input"));
// // This function is responsible to create the trailing color and setting the fill.
// function applyFill(slider) {
// 	const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
// 	const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage +
// 			0.1}%)`;
// 	slider.style.background = bg;
// 	sliderValue.setAttribute("data-length", slider.value);
// }

///////




// Accordion on/off
  // let $thisIcon = $thisAccBtn.querySelector(".js-accordionIcon");
  // let $thisContent = $switchParents.querySelector(".js-accordionContent");
  // let $contentExpanded = $thisAccBtn.ariaExpanded;
  // let $contentExpanded = $thisAccBtn.getAttribute("aria-expanded") === "true" || false;

// console.log($switchId + " is expanded " + $contentExpanded);

  // function closeAccordion() {
  //  // $thisAccBtn.setAttribute("aria-expanded", false);
  //   $thisAccBtn.ariaExpanded = "false"
  //   $thisAccBtn.classList.add("is-closed");
  //   $thisIcon.classList.add("is-closed");
  //   $thisContent.classList.add("is-closed");
  // }

  // function openAccordion() {
  // //   $thisAccBtn.setAttribute("aria-expanded", true);
  //   $thisAccBtn.ariaExpanded = "true"

  //   $thisAccBtn.classList.remove("is-closed");
  //   $thisIcon.classList.remove("is-closed");
  //   $thisContent.classList.remove("is-closed");
//}