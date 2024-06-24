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


/* Find what switch was changed & set its layer's on/off value */
function setGlassValues($id, $isOn) {
  // console.log($id + " is ON " + $isOn);

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
      $glassGenerator.style.setProperty("--color-gen", `var(--color-hsla)`);
      // $colorValue = document.querySelector('input[name="color"]:checked').value;
    } else {
      // $colorValue = `none`;
      $glassGenerator.style.setProperty("--color-gen", `transparent`);
    }

    // $glassGenerator.style.setProperty("--color-gen", `${$colorValue}`);

    // console.log("color value: " + $colorValue);
  }

  if($id == "js-filterSwitch") {
    if($isOn) {
      $filterValue = `blur(var(--blur-gen)) brightness(var(--bright-gen)) saturate(var(--satu-gen))`;
    } else {
      $filterValue = `none`;
      // $blurValue = `0px`;
      // $brightValue = `1`;
      // $satuValue = `1`;
    }

    $glassGenerator.style.setProperty("--filter-gen", `${$filterValue}`);

    // console.log("filter value: " + $filterValue);
  }

  if($id == "blur-checkbox") {
    if($isOn) {
      $blurValue = document.getElementById('blur-slider').value;
    } else {
      $blurValue = `0px`;
    }

    $glassGenerator.style.setProperty("--blur-gen", `${$blurValue}px`);

    // console.log("blur value: " + $blurValue);
  }

  if($id == "bright-checkbox") {
    if($isOn) {
      $brightValue = document.getElementById('bright-slider').value;
    } else {
      $brightValue = `1`;
    }

    $glassGenerator.style.setProperty("--bright-gen", `${$brightValue}`);

    // console.log("bright value: " + $brightValue);
  }

  if($id == "satu-checkbox") {
    if($isOn) {
      $satuValue = document.getElementById('satu-slider').value;
    } else {
      $satuValue = `1`;
    }

    $glassGenerator.style.setProperty("--satu-gen", `${$satuValue}`);

    // console.log("satu value: " + $satuValue);
  }

  // else {
  //   if(!$id || $id === null || $id === undefined) {
  //     console.log(" Element id does not exist in setGlassValues()");
  //   }

  //   if($isOn === null || $isOn === undefined) {
  //     console.log(" Element $isOn bool not passed to setGlassValues()");
  //   }
  // }
}

/* on chevron click toggle accordion content */
function toggleAccordionContent(e) {
  const $accordionBtn = e.target;
  const $expanded = $accordionBtn.getAttribute("aria-expanded") === "true" || false;
  const $accordion = $accordionBtn.parentNode.parentNode;

  $accordion.classList.toggle("is-closed");
  $accordionBtn.setAttribute("aria-expanded", !$expanded);
};

/* on switch change enable/disable accordion AND show/hide accordion content */
/* not part of setSwitch() so as not to open all content on load */
function accordionOnOff($switch, $checked) {
  const $accordion = $switch.parentNode.parentNode.parentNode;
  const $accordionBtn = $accordion.querySelector(".js-switchAccordionBtn");

  if($checked) {
    $accordion.classList.remove("is-closed");
    $accordionBtn.setAttribute("aria-expanded", true);
    $accordionBtn.removeAttribute("disabled");
    // initSliders();
  };

  if(!$checked) {
    $accordion.classList.add("is-closed");
    $accordionBtn.setAttribute("aria-expanded", false);
    $accordionBtn.setAttribute("disabled", true);
  };
}


function setSwitch($switch, $checked) {
  let $switchId = $switch.id;
  let $switchParent = $switch.parentNode;

  if($checked) {
    $switch.ariaChecked = "true";
    $switchParent.classList.remove("is-off");
    setGlassValues($switchId, true);
    // console.log($switchId + " is now ON");

  } else {
    $switch.ariaChecked = "false";
    $switchParent.classList.add("is-off");
    setGlassValues($switchId, false);
    // console.log($switchId + " is now OFF");
  }
}


function setFilter($check, $checked) {
  let $checkbox = $check;
  let $checkId = $checkbox.id;
  let $filterControls = $checkbox.parentNode.parentNode;
  let $filterSlider = $filterControls.querySelector(".js-slider-ui");

  if($checked) {
    $check.ariaChecked = "true";
    $filterControls.classList.remove("is-off");
    $filterSlider.removeAttribute("disabled");
    setGlassValues($checkId, true);

    // console.log($checkId + " is now ON");

  } else {
    $check.ariaChecked = "false";
    $filterControls.classList.add("is-off");
    $filterSlider.setAttribute("disabled", true);
    setGlassValues($checkId, false);

    // console.log($checkId + " is now off");
  }
}


function onSwitchChange(e) {
  let $switch = e.target;
  let $checked = $switch.checked;

  accordionOnOff($switch, $checked);
  setSwitch($switch, $checked);
}


function onCheckChange(e) {
  let $check = e.target;
  let $checked =  $check.checked;
  setFilter($check, $checked);
}


function initializeGenerator() {
  $glassGenerator = document.getElementById("glass-generator");

  /* On/Off */
  /* ========================================== */
  /* Glass Switches */
  document.querySelectorAll(".js-accordionSwitch").forEach(($switch) => {
    let $checked = $switch.checked;
    setSwitch($switch, $checked);
    $switch.addEventListener("change", onSwitchChange);
  });

  /* Filter checkboxes */
  document.querySelectorAll(".js-filter-value-checkbox").forEach(($check) => {
    let $checked = $check.checked;
    setFilter($check, $checked);
    $check.addEventListener("change", onCheckChange);
  });

  /* Accordions */
  document.querySelectorAll(".js-switchAccordionBtn").forEach(($btn) => {
    $btn.addEventListener("click", toggleAccordionContent);
  });


  /* Values */
  /* ========================================== */
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

  const $colorPicker = document.getElementById("picker");
  let $computed = window.getComputedStyle(document.body)
  let $hsla = $computed.getPropertyValue("--color-hsla");
  $colorValue = $hsla;
  $glassGenerator.style.setProperty("--color-gen", `${$hsla}`);
  // console.log("hsla: " + $hsla);

  $colorPicker.querySelectorAll('input[name="colorSlider"]').forEach(($slider) => {
    $slider.addEventListener("input", () => {
      $glassGenerator.style.setProperty("--color-gen", `var(--color-hsla)`);
    });
  });


  /* Filters */
  /* ========================================== */
  /* Blur */
  document.getElementById("blur-slider").addEventListener("input", (e) => {
    $blurValue = `${e.target.value}px`;
    $glassGenerator.style.setProperty("--blur-gen", `${e.target.value}px`);
    // console.log(`blur: ${e.target.value}`);
  });

  /* Bright */
  document.getElementById("bright-slider").addEventListener("input", (e) => {
    $brightValue = e.target.value;
    $glassGenerator.style.setProperty("--bright-gen", `${e.target.value}`);
    // console.log(`bright: ${e.target.value}`);
  });

  /* Satu */
  document.getElementById("satu-slider").addEventListener("input", (e) => {
    $satuValue = e.target.value;
    $glassGenerator.style.setProperty("--satu-gen", `${e.target.value}`);
    // console.log(`satu: ${e.target.value}`);
  });
};