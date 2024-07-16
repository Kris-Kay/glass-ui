/* ========================================== */
/* 3d glass generator */
/* ========================================== */
let colorUpdateTimeout;

let $computedGlass;

let $colorSet;
let $colorValue;

let $bevelSet;
let $bevelValue;

let $noiseSet;
let $noiseValue;

let $shadowSet;
let $shadowValue;

let $filterValue;

let $blurSet;
let $blurValue;

let $brightSet;
let $brightValue;

let $satuSet;
let $satuValue;



/* display code */
/* ========================================== */
function displayComputedStyle() {
  const $codeDisplay = document.getElementById('codeDisplay');

  $codeDisplay.textContent =
    `.glass-3d { \n` +

    `  /* main element */ \n` +
    `  --color-glass3d: ${$colorValue}; \n` +
    `  --shadow-glass3d: \n` +
    `    ${$shadowValue}; \n` +

    `\n` +

    `  /* ::after */ \n` +
    `  --bevel-glass3d: \n` +
    `  ${$bevelValue}; \n` +

    `\n` +

    `  /* ::before */ \n` +
    `  --noise-glass3d: ${$noiseValue}; \n` +
    `  --blur-glass3d: ${$blurValue}; \n` +
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

    // console.log(`code display updated`);
}


/* set on/off values */
/* ========================================== */
function setOnOffValue($id, $isOn) {

  /* bevel */
  /* ========================================== */
  if($id == "js-bevelSwitch") {
    $bevelValue = $isOn ? $bevelSet : `none`;
    document.body.style.setProperty("--bevel-glass3d", `${$bevelValue}`);
  }

  /* color */
  /* ========================================== */
  if($id == "js-colorSwitch") {
    $colorValue = $isOn ? $colorSet : `transparent`;
    document.body.style.setProperty("--color-glass3d", `${$colorValue}`);

    // console.log("on/off color set: " + $colorSet);
    // console.log("on/off color value: " + $colorValue);
  }

  /* noise */
  /* ========================================== */
  if($id == "js-noiseSwitch") {
    $noiseValue = $isOn ? $noiseSet : `none`;
    document.body.style.setProperty("--noise-glass3d", `${$noiseValue}`);

    // console.log("noise value: " + $noiseValue);
  }

  /* shadow */
  /* ========================================== */
  if($id === "js-shadowSwitch") {
    $shadowValue = $isOn ? $shadowSet : `none`;
    document.body.style.setProperty("--shadow-glass3d", `${$shadowValue}`);
  }

  /* filter */
  /* ========================================== */
  if($id == "js-filterSwitch") {

    if($isOn) {
      $filterValue = `blur(var(--blur-glass3d)) brightness(var(--bright-glass3d)) saturate(var(--satu-glass3d))`;

      $blurValue = $blurSet;
      $brightValue = $brightSet;
      $satuValue = $satuSet;

    } else {
      $filterValue = `none`;
    }

    document.body.style.setProperty("--filter-glass3d", `${$filterValue}`);
  }

  if($id == "blur-checkbox") {
    $blurValue = $isOn ? $blurSet : `0`;
    document.body.style.setProperty("--blur-glass3d", `${$blurValue}px`);

    // console.log("blur value: " + $blurValue);
  }

  if($id == "bright-checkbox") {
    $brightValue = $isOn ? $brightSet : `1`;
    document.body.style.setProperty("--bright-glass3d", `${$brightValue}`);

    // console.log("bright value: " + $brightValue);
    // console.log("bright set: " + $brightSet);
  }

  if($id == "satu-checkbox") {
    $satuValue = $isOn ? $satuSet : `1`;
    document.body.style.setProperty("--satu-glass3d", `${$satuValue}`);

    // console.log("satu value: " + $satuValue);
    // console.log("satu set: " + $satuSet);
  }

  displayComputedStyle();
}


/* on slider input update color */
/* ========================================== */
function updateColor() {
  clearTimeout(colorUpdateTimeout);

  colorUpdateTimeout = setTimeout(() => {
    $colorSet = $computedGlass.getPropertyValue("--color-hsla");
    $colorValue = $colorSet;
    document.body.style.setProperty("--color-glass3d", `${$colorValue}`);
    displayComputedStyle();

    // console.log("get --color-hsla set --color-glass3d: " + $colorSet);

  }, 102);
}



/* set Filter */
/* ========================================== */
function setFilter($check, $checkBool) {
  let $checkId = $check.id;
  let $filterControls = $check.parentNode.parentNode;
  let $filterSlider = $filterControls.querySelector(".js-slider-ui");

  if($checkBool) {
    $check.ariaChecked = "true";
    $filterControls.classList.remove("is-off");
    $filterSlider.removeAttribute("disabled");
    setOnOffValue($checkId, true);

    // console.log($checkId + " is now ON");

  } else {
    $check.ariaChecked = "false";
    $filterControls.classList.add("is-off");
    $filterSlider.setAttribute("disabled", true);
    setOnOffValue($checkId, false);
    // console.log($checkId + " is now off");
  }
}


/* on check change */
/* ========================================== */
function onCheckChange(e) {
  let $check = e.target;
  let $checkBool = $check.checked;
  setFilter($check, $checkBool);
}

/* on chevron click */
/* ========================================== */
function toggleAccordion(e) {
  let $thisToggle = e.target;
  let $thisAccordion = $thisToggle.parentNode.parentNode;
  let $expanded = $thisToggle.getAttribute("aria-expanded") === "true" || false;

  $thisAccordion.classList.toggle("is-closed");
  $thisToggle.setAttribute("aria-expanded", !$expanded);

  console.log("toggle $thisAccordion: " + $thisAccordion.id);
  console.log("$expanded: " + $expanded);
};

/* accordion disable/enable */
/* ========================================== */
function accordionOnOff($switch, $switchBool) {
  const $accordion = $switch.parentNode.parentNode;
  const $accordionBtn = $accordion.querySelector(".js-accordionBtn");

  if($switchBool) {
    // $accordion.classList.remove("is-closed");
    // $accordionBtn.setAttribute("aria-expanded", true);
    $accordionBtn.removeAttribute("disabled");
  };

  if(!$switchBool) {
    $accordion.classList.add("is-closed");
    $accordionBtn.setAttribute("aria-expanded", false);
    $accordionBtn.setAttribute("disabled", true);
  };
}


/* set Switch */
/* ========================================== */
function setSwitch($switch, $switchBool) {
  let $switchId = $switch.id;
  let $switchParent = $switch.parentNode;

  if($switchBool) {
    $switch.ariaChecked = "true";
    // $switchParent.classList.remove("is-off");
    setOnOffValue($switchId, true);
    // console.log($switchId + " is now ON");

  } else {
    $switch.ariaChecked = "false";
    // $switchParent.classList.add("is-off");
    setOnOffValue($switchId, false);
    // console.log($switchId + " is now OFF");
  }
}


/* on switch change */
/* ========================================== */
function onSwitchChange(e) {
  let $switch = e.target;
  let $switchBool = $switch.checked;
  setSwitch($switch, $switchBool);
  accordionOnOff($switch, $switchBool);
}


/* initialize */
/* ========================================== */
function initializeGenerator() {

  $computedGlass = window.getComputedStyle(document.body);
  $colorSet = $computedGlass.getPropertyValue("--color-hsla");

  $bevelSet = document.querySelector('input[name="bevels"]:checked').value;
  $noiseSet = document.querySelector('input[name="noise"]:checked').value;
  $shadowSet = document.querySelector('input[name="shadows"]:checked').value;
  $blurSet = document.getElementById('blur-slider').value;
  $brightSet = document.getElementById('bright-slider').value;
  $satuSet = document.getElementById('satu-slider').value;

  /* accordionBtn event listener */
  /* ========================================== */
  document.querySelectorAll(".js-accordionBtn").forEach(($accordionBtn) => {
    $accordionBtn.addEventListener("click", toggleAccordion);
  });

  /* Switch event listener */
  /* ========================================== */
  document.querySelectorAll(".js-accordionSwitch").forEach(($switch) => {
    let $switchBool = $switch.checked;
    setSwitch($switch, $switchBool);
    $switch.addEventListener("change", onSwitchChange);
  });


  /* Filter checkbox event listener */
  /* ========================================== */
  document.querySelectorAll(".js-filter-checkbox").forEach(($check) => {
    let $filterBool = $check.checked;
    setFilter($check, $filterBool);
    $check.addEventListener("change", onCheckChange);
  });


  /* Bevel radio event listener */
  /* ========================================== */
  document.querySelectorAll('input[name="bevels"]').forEach(($radio) => {
    $radio.addEventListener("change", (e) => {
      $bevelSet = e.target.value;
      $bevelValue = $bevelSet;
      document.body.style.setProperty("--bevel-glass3d", `${$bevelValue}`);
      displayComputedStyle();

      // console.log("new bevel Value: " + $bevelValue);
    });
  });


  /* Color slider event listener */
  /* ========================================== */
  document.getElementById("js-colorPicker").querySelectorAll('.js-colorSlider').forEach(($slider) => {
    $slider.addEventListener("input", () => {
      updateColor();
    });
  });



  /* Noise radio event listener */
  /* ========================================== */
  document.querySelectorAll('input[name="noise"]').forEach(($radio) => {
    $radio.addEventListener("change", (e) => {
      $noiseSet = e.target.value;
      $noiseValue = $noiseSet;
      document.body.style.setProperty("--noise-glass3d", `${$noiseValue}`);
      displayComputedStyle();

      // console.log("new noise value: " + $noiseValue);
    });
  });


  /* Shadow radio event listener */
  /* ========================================== */
  document.querySelectorAll('input[name="shadows"]').forEach(($radio) => {
    $radio.addEventListener("change", (e) => {
      $shadowSet = e.target.value;
      $shadowValue = $shadowSet;
      document.body.style.setProperty("--shadow-glass3d", `${$shadowValue}`);
      displayComputedStyle();

      // console.log("new shadow Value: " + $shadowValue);
    });
  });


  /* Blur slider event listener */
  /* ========================================== */
  document.getElementById("blur-slider").addEventListener("input", (e) => {
    $blurSet = e.target.value;
    $blurValue = $blurSet;
    document.body.style.setProperty("--blur-glass3d", `${$blurValue}px`);
    displayComputedStyle();

    // console.log("blur: " +  $blurValue);
  });


  /* Bright slider event listener */
  /* ========================================== */
  document.getElementById("bright-slider").addEventListener("input", (e) => {
    $brightSet = e.target.value;
    $brightValue = $brightSet;
    document.body.style.setProperty("--bright-glass3d", `${$brightValue}`);
    displayComputedStyle();

    // console.log("bright: " +  $brightValue);
  });


  /* Satu slider event listener */
  /* ========================================== */
  document.getElementById("satu-slider").addEventListener("input", (e) => {
    $satuSet = e.target.value;
    $satuValue = $satuSet;
    document.body.style.setProperty("--satu-glass3d", `${$satuValue}`);
    displayComputedStyle();

    // console.log("satu: " +  $satuValue);
  });


  /* Display Code */
  displayComputedStyle();
};
