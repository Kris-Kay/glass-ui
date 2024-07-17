/* ========================================== */
/* 3d glass generator */
/* ========================================== */
let $glassCodeSource;

let $bevelValue;
let $bevelLastSet;

let $colorValue;
let $colorLastSet;

let $noiseValue;
let $noiseLastSet;

let $shadowValue;
let $shadowLastSet;

let $blurValue;
let $blurLastSet;
let $brightValue;
let $brightLastSet;
let $satuValue;
let $satuLastSet;
let $filterValue;

let $codeDisplay;

/* ========================================== */
/* set on/off values */
/* ========================================== */
function setOnOffValue($input, $isOn) {
  let $id = $input.id;

  /* bevel */
  /* ========================================== */
  if($id === "js-bevelSwitch") {
    // console.log($isOn);
    // console.log($bevelLastSet);
    $bevelValue = $isOn ? $bevelLastSet : `0 0 0`;
    document.body.style.setProperty("--bevel-glass3d", `${$bevelValue}`);

  }

  /* color */
  /* ========================================== */
  if($id === "js-colorSwitch") {
    $colorValue = $isOn ? $colorLastSet : `transparent`;
    document.body.style.setProperty("--color-glass3d", `${$colorValue}`);

    // console.log("on/off color value: " + $colorValue);
  }

  /* noise */
  /* ========================================== */
  if($id === "js-noiseSwitch") {
    $noiseValue = $isOn ? $noiseLastSet : `none`;
    document.body.style.setProperty("--noise-glass3d", `${$noiseValue}`);

    // console.log("noise value: " + $noiseValue);
  }

  /* shadow */
  /* ========================================== */
  if($id === "js-shadowSwitch") {
    $shadowValue = $isOn ? $shadowLastSet : `none`;
    document.body.style.setProperty("--shadow-glass3d", `${$shadowValue}`);
  }

  /* blur */
  if($id === "blur-checkbox") {
    $blurValue = $isOn ? $blurLastSet : `0`;
    document.body.style.setProperty("--blur-glass3d", `${$blurValue}px`);

    console.log("blur value: " + $blurValue);
  }

  /* bright */
  if($id === "bright-checkbox") {
    $brightValue = $isOn ? $brightLastSet : `1`;
    document.body.style.setProperty("--bright-glass3d", `${$brightValue}`);

    // console.log("bright value: " + $brightValue);
  }

  /* satu */
  if($id === "satu-checkbox") {
    $satuValue = $isOn ? $satuLastSet : `1`;
    document.body.style.setProperty("--satu-glass3d", `${$satuValue}`);

    // console.log("satu value: " + $satuValue);
  }

    /* filter */
  /* ========================================== */
  if($id === "js-filterSwitch") {

    if($isOn) {
      $blurValue = $blurLastSet;
      $brightValue = $brightLastSet;
      $satuValue = $satuLastSet;

      $filterValue = `blur(var(--blur-glass3d)) brightness(var(--bright-glass3d)) saturate(var(--satu-glass3d))`;

    } else {
      // $filterValue = `blur(0px) brightness(1) saturate(1)`;
      $filterValue = `none`;
    }

    document.body.style.setProperty("--filter-glass3d", `${$filterValue}`);
    // console.log("$filterValue: " + $filterValue);
  }

  displayCss();
}


/* ========================================== */
/* Bevel */
/* ========================================== */
/* on bevel radio change to new value (not on/off) */
function onBevelChange(event) {
  $bevelValue = event.target.value;
  $bevelLastSet = $bevelValue;
  document.body.style.setProperty("--bevel-glass3d", `${$bevelValue}`);
  displayCss();

  // console.log("$bevelLastSet: " + $bevelLastSet);
}

/* add bevel radio event listener */
function addBevelEvent() {
  let $bevels = document.querySelectorAll('input[name="bevels"]');
  $bevels.forEach(($bevel) => {
    $bevel.addEventListener("change", onBevelChange);
  });
}


/* ========================================== */
/* Color sliders */
/* ========================================== */
/* on color slider input to new value (not on/off) */
function onColorSliderChange() {
  $colorValue = getHSLAString();
  $colorLastSet = $colorValue;
  document.body.style.setProperty("--color-glass3d", `${$colorValue}`);
  displayCss();

  // console.log("$colorValue: " + $colorValue);
}

/* add color slider event listener */
function addColorSliderEvent() {
  let $colorSliders = document.querySelectorAll('.js-colorSlider');
  $colorSliders.forEach(($slider) => {
    $slider.addEventListener("change", onColorSliderChange);
  });
}


/* ========================================== */
/* Noise */
/* ========================================== */
/* on noise radio change to new value (not on/off) */
function onNoiseChange(event) {
  $noiseValue = event.target.value;
  $noiseLastSet = $noiseValue;
  document.body.style.setProperty("--noise-glass3d", `${$noiseValue}`);
  displayCss();

  // console.log("$noiseValue: " + $noiseValue);
}

/* add noise radio event listener */
function addNoiseEvent() {
  let $noises = document.querySelectorAll('input[name="noise"]');
  $noises.forEach(($noise) => {
    $noise.addEventListener("change", onNoiseChange);
  });
}


/* ========================================== */
/* Shadows */
/* ========================================== */
/* on shadow radio change to new value (not on/off) */
function onShadowChange(event) {
  $shadowValue = event.target.value;
  $shadowLastSet = $shadowValue;
  document.body.style.setProperty("--shadow-glass3d", `${$shadowValue}`);
  displayCss();
}

/* add shadow radio event listener */
function addShadowEvent() {
  let $shadows = document.querySelectorAll('input[name="shadows"]');
  $shadows.forEach(($shadow) => {
    $shadow.addEventListener("change", onShadowChange);
  });
}


/* ========================================== */
/* Filter sliders */
/* ========================================== */
function onFilterSliderChange(event) {
  let $slider = event.target;
  let $id = $slider.id;

  console.log("$filter slider: " + $id + " " + $slider.value);

  /* find the slider that changed and update the corresponding --var to its value */
  if($id  === "blur-slider") {
    $blurValue = $slider.value;
    $blurLastSet = $blurValue;
    document.body.style.setProperty("--blur-glass3d", `${$blurValue}px`);

  } else if($id  === "bright-slider") {
    $brightValue = $slider.value;
    $brightLastSet = $brightValue;
    document.body.style.setProperty("--bright-glass3d", `${$brightValue}`);

  } else if($id  === "satu-slider") {
    $satuValue = $slider.value;
    $satuLastSet = $satuValue;
    document.body.style.setProperty("--satu-glass3d", `${$satuValue}`);
  }

  displayCss();
}

/* add filter slider event listener */
function addFilterSliderEvent() {
  let $filterSliders = document.querySelectorAll('.js-slider-ui');

  $filterSliders.forEach(($fSlider) => {
    $fSlider.addEventListener("input", onFilterSliderChange);
  });
}


/* ========================================== */
/* Filter checkboxes */
/* ========================================== */
function onCheckChange(event) {
  let $check = event.target;
  let $isOn = $check.checked;

  let $filterControls = $check.parentNode.parentNode;
  let $filterSlider = $filterControls.querySelector(".js-slider-ui");

  if($isOn) {
    $check.ariaChecked = "true";
    $filterControls.classList.remove("is-off");
    $filterSlider.removeAttribute("disabled");
    // setOnOffValue($check, true);

  } else {
    $check.ariaChecked = "false";
    $filterControls.classList.add("is-off");
    $filterSlider.setAttribute("disabled", true);
    // setOnOffValue($check, false);
  }
  setOnOffValue($check, $isOn);
}


/* add event listener to checkboxes */
function addFilterCheckEvent() {
  let $checkboxes = document.querySelectorAll(".js-filter-checkbox");

  $checkboxes.forEach(($check) => {
    $check.addEventListener("change", onCheckChange);
  });
}

/* ========================================== */
/* Accordions */
/* ========================================== */
/* on accordion toggle */
function onAccordionToggle(event) {
  let $toggle = event.target;
  let $accordion = $toggle.parentNode.parentNode;
  let $expanded = $toggle.getAttribute("aria-expanded") === "true" || false;

  $accordion.classList.toggle("is-closed");
  $toggle.setAttribute("aria-expanded", !$expanded);

  // console.log("toggle $accordion: " + $accordion.id);
  // console.log("$expanded: " + !$expanded);
}

/* add accordion chevron event listener */
function addAccordionBtnEvent() {
  let $accordionBtns = document.querySelectorAll(".js-accordionBtn");

  $accordionBtns.forEach(($btn) => {
    $btn.addEventListener("click", onAccordionToggle);
  });
}

/* switch accordion on/off */
function accordionOnOff($switch, $isOn) {
  const $accordion = $switch.parentNode.parentNode;
  const $accordionBtn = $accordion.querySelector(".js-accordionBtn");

  if($isOn) {
    // $accordion.classList.remove("is-closed");
    // $accordionBtn.setAttribute("aria-expanded", true);
    $accordionBtn.removeAttribute("disabled");
  } else {
    $accordion.classList.add("is-closed");
    $accordionBtn.setAttribute("aria-expanded", false);
    $accordionBtn.setAttribute("disabled", true);
  };
}


/* ========================================== */
/* Switches */
/* ========================================== */
/* on switch change */
function onSwitchChange(event) {
  let $switch = event.target;
  let $isOn = $switch.checked;
  setOnOffValue($switch, $isOn);
  accordionOnOff($switch, $isOn);

  // console.log($switch.id + " is on: " + $isOn);
}

/* add switch event listener */
function addSwitchEvent() {
  let $switches = document.querySelectorAll(".js-accordionSwitch");

  $switches.forEach(($switch) => {
    // let $isOn = $switch.checked;
    // accordionOnOff($switch, $isOn);
    $switch.addEventListener("change", onSwitchChange);

    // console.log("add $switches " + $switch.id + " " + $isOn);
  });
}


/* ========================================== */
/* Display code */
/* ========================================== */
function displayCss() {
  let $computedGlass = window.getComputedStyle($glassCodeSource); // [object CSS2Properties]
  // let $computedGlassB4 = window.getComputedStyle($glassCodeSource, ':before'); // ::before
  let $computedGlassAfter = window.getComputedStyle($glassCodeSource, ':after'); // ::after

  let $bevelComp = $computedGlassAfter.getPropertyValue('box-shadow');
  let $colorString = getHSLAString();
  let $noiseURL = document.querySelector('input[name="noise"]:checked').getAttribute("noise-url");
  let $shadowComp = $computedGlass.getPropertyValue('box-shadow');

  // console.log("$bevelComp: " + $bevelComp );
  // console.log("$noiseURL: " + $noiseURL );

  $codeDisplay.textContent =
    `.glass-3d { \n` +

    `  /* glass --vars */ \n` +
    `  --color-glass3d: ${$colorString}; \n` +
    `  --shadow-glass3d: \n` +
    `    ${$shadowComp}; \n` +
    `  --bevel-glass3d: \n` +
    `  ${$bevelComp}; \n` +

    `  --noise-glass3d: ${$noiseURL}; \n` +
    `  --blur-glass3d: ${$blurValue}px; \n` +
    `  --bright-glass3d: ${$brightValue}; \n` +
    `  --satu-glass3d: ${$satuValue}; \n` +
    `  --filter-glass3d: ${$filterValue}; \n` +

    `\n` +

    `  position: relative; \n` +
    `  z-index: 4; \n` +
    `  background-color: var(--color-glass3d); \n` +
    `  box-shadow: var(--shadow-glass3d); \n` +
    `}\n` +

    `\n` +

    `.glass-3d::after { \n` +
    `  content: ""; \n` +
    `  position: absolute; \n` +
    `  inset: 0; \n` +
    `  pointer-events: none; \n` +
    `  border-radius: inherit; \n` +
    `  overflow: hidden; \n` +
    `  z-index: 5; \n` +
    `  \n` +
    `  box-shadow: var(--bevel-glass3d); \n` +
    `}\n`+

    `\n` +

    `.glass-3d::before { \n` +
    `  content: ""; \n` +
    `  position: absolute; \n` +
    `  inset: 0; \n` +
    `  pointer-events: none; \n` +
    `  border-radius: inherit; \n` +
    `  overflow: hidden; \n` +
    `  z-index: 3; \n` +
    `  \n` +
    `  -webkit-backdrop-filter: var(--filter-glass3d); \n` +
    `  backdrop-filter: var(--filter-glass3d); \n` +

    `  background-image: var(--noise-glass3d); \n` +
    `  background-size: 100px; \n` +
    `  background-repeat: repeat; \n` +
    `}\n` +

    `\n` +

    `.glass-3d > * { \n` +
    `  position: relative; \n` +
    `  z-index: 6; \n` +
    `}\n`
    ;

    console.log(`code display updated`);
    // console.log("$codeDisplay text: " + $codeDisplay.textContent);
}


/* initialize */
/* ========================================== */
function initializeGenerator() {
  $glassCodeSource = document.getElementById("js-glassCodeSouce");

  $bevelValue = document.querySelector('input[name="bevels"]:checked').value;
  $bevelLastSet = $bevelValue;

  $colorValue =  'hsla(190, 90%, 60%, 0.1)';
  $colorLastSet = $colorValue;

  $noiseValue = document.querySelector('input[name="noise"]:checked').value;
  $noiseLastSet = $noiseValue;

  $shadowValue = document.querySelector('input[name="shadows"]:checked').value;
  $shadowLastSet = $shadowValue;

  $blurValue = document.getElementById('blur-slider').value;
  $blurLastSet = $blurValue;
  document.body.style.setProperty("--blur-glass3d", `${$blurValue}px`);

  $brightValue = document.getElementById('bright-slider').value;
  $brightLastSet = $brightValue;
  document.body.style.setProperty("--bright-glass3d", `${$brightValue}`);

  $satuValue = document.getElementById('satu-slider').value;
  $satuLastSet = $satuValue;
  document.body.style.setProperty("--satu-glass3d", `${$satuValue}`);

  $filterValue = 'blur(var(--blur-glass3d)) brightness(var(--bright-glass3d)) saturate(var(--satu-glass3d))';

  $codeDisplay = document.getElementById('codeDisplay');

  addBevelEvent();
  addColorSliderEvent();
  addNoiseEvent();
  addShadowEvent();
  addFilterCheckEvent();
  addFilterSliderEvent();

  addAccordionBtnEvent();
  addSwitchEvent();
  displayCss();
};
