/* ========================================== */
/* 3d glass generator */
/* ========================================== */

let $glassGen;
let $bevelValue;
let $noiseValue;
let $shadowValue;

function onSwitchChange(e) {
  const $thisSwitch = e.target;
  const $thisSwitchParents = $thisSwitch.parentNode.parentNode.parentNode;
  const $thisSwitchGroup = $thisSwitchParents.querySelector(".js-switchGroup");
  const $thisToSwitch = $thisSwitchParents.querySelector(".js-toSwitch");
  const $ariaChecked = $thisSwitch.getAttribute("aria-checked") === "true" || false;
  const $switchId = $thisSwitch.id;
  const $thisContent = $thisSwitchParents.querySelector(".js-accordionContent");
  const $expanded = $thisToSwitch.getAttribute("aria-expanded") === "true" || false;
  const $thisIcon = $thisToSwitch.querySelector(".js-accordionIcon");

  /* If accordion is switched off while expanded -> close it */
  function closeAccordion() {
    if($expanded) {
      $thisToSwitch.setAttribute("aria-expanded", false);
      $thisToSwitch.classList.add("is-closed");
      $thisIcon.classList.add("is-closed");
      $thisContent.classList.add("is-closed");
    }
  }

/* Switch on/off */
  function toggleSwitch() {
    if ($ariaChecked) {
      $thisSwitchGroup.classList.add("is-off");
      $thisToSwitch.setAttribute("disabled", true);
      $thisSwitch.ariaChecked = false;
      closeAccordion();
      toggleGlassLayers($switchId, true);
      // console.log($switchId + " is off");

    } else {
      $thisSwitchGroup.classList.remove("is-off");
      $thisToSwitch.removeAttribute("disabled");
      $thisSwitch.ariaChecked = true;
      toggleGlassLayers($switchId, false);
      // console.log($switchId + " is ON");
    }
  }
  toggleSwitch();
}


/* Find what switch was changed & set its layer's on/off value */
function toggleGlassLayers($id, $isOff) {
  // console.log($id + " is off " + $isOff);

  if($id == "js-bevelSwitch") {
    setBevelvalue($isOff);
  }

  if($id == "js-colorSwitch") {
    if($isOff == true) {
      setColor(`transparent`);
    } else {
      setColor(`var(--tint-xdark)`);
    }
  }

  if($id == "js-noiseSwitch") {
    setNoiseValue($isOff);
  }

  if($id == "js-shadowSwitch") {
    setShadowValue($isOff);
  }

  if($id == "js-filterSwitch") {
    if($isOff == true) {
      setFilter(`none`);
    } else {
      setFilter(`blur(var(--blur)) brightness(var(--bright)) saturate(var(--satu))`);
    }
  }
}

/* Bevels */
/* ========================================== */
function setBevelvalue($isOff) {
  if($isOff) {
    $bevelValue = `none`;
  } else {
    $bevelValue = document.querySelector('input[name="bevels"]:checked').value;
  }

  setBevel($bevelValue);
}

function setBevel($value) {
  $glassGen.forEach(($glass) => {
    $glass.style.setProperty("--bevel", `${$value}`);
  });
  console.log("bevel value: " + $value);
}

/* Colors */
/* ========================================== */
function setColor($value) {
  $glassGen.forEach(($glass) => {
    $glass.style.setProperty("--color", `${$value}`);
  });
}

/* Noise */
/* ========================================== */
function setNoiseValue($isOff) {
  if($isOff) {
    $noiseValue = `none`;
  } else {
    $noiseValue = document.querySelector('input[name="noise"]:checked').value;
  }

  setNoise($noiseValue);
}

function setNoise($value) {
  $glassGen.forEach(($glass) => {
    $glass.style.setProperty("--noise", `${$value}`);
  });

  console.log("noise value: " + $value);
}

/* Shadows*/
/* ========================================== */
function setShadowValue($isOff) {
  if($isOff) {
    $shadowValue = `none`;
  } else {
    $shadowValue = document.querySelector('input[name="shadows"]:checked').value;
  }

  setShadow($shadowValue);
}

function setShadow($value) {
  $glassGen.forEach(($glass) => {
    $glass.style.setProperty("--shadow", `${$value}`);
  });
  console.log("shadow value: " + $value);
}

/* Filters */
/* ========================================== */
function setFilter($value) {
  $glassGen.forEach(($glass) => {
    $glass.style.setProperty("--filter", `${$value}`);
  });
}


function initializeGenerator() {

  document.querySelectorAll(".js-accordionSwitch").forEach(($switch) => {
    $switch.addEventListener("change", onSwitchChange);
  });

  $glassGen = document.querySelectorAll(".glass-3d-gen");

  /* Bevels */
  $bevelValue = document.querySelector('input[name="bevels"]:checked').value;
  $bevelRadios = document.querySelectorAll('input[name="bevels"]');
  $bevelRadios.forEach(($radio) => {
    $radio.addEventListener("change", (event) => {
      setBevel(`${event.target.value}`);
      // console.log(`Bevel ${event.target.value}`);
    });
  });

  /* Noise */
  $noiseValue = document.querySelector('input[name="noise"]:checked').value;
  $noiseRadios = document.querySelectorAll('input[name="noise"]');
  $noiseRadios.forEach(($radio) => {
    $radio.addEventListener("change", (event) => {
      setNoise(`${event.target.value}`);
      // console.log(`Noise ${event.target.value}`);
    });
  });

/* Shadows*/
  $shadowValue = document.querySelector('input[name="shadows"]:checked').value;
  $shadowRadios = document.querySelectorAll('input[name="shadows"]');
  $shadowRadios.forEach(($radio) => {
    $radio.addEventListener("change", (event) => {
      setShadow(`${event.target.value}`);
      // console.log(`Shadow ${event.target.value}`);
    });
  });

};
