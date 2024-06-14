
// inputs
let blurInput = document.querySelector('#blurValueGlass');
let opacityGlass = document.querySelector('#opacityGlass');
let saturation = document.querySelector('#saturation');
let outlineInput = document.querySelector('#outlineInput');

let CardcolorGlass = document.querySelector('#CardcolorGlass');

let blurInputNumber = document.querySelector('#blurValueGlassNumber');
let opacityGlassNumber = document.querySelector('#opacityGlassNumber');
let saturationNumber = document.querySelector('#saturationNumber');
let outlineNumber = document.querySelector('#outlineNumber')

let resultGlassCode = document.querySelector('#resultGlassCode')

document.querySelector('#copyCodeGlass').addEventListener('click',()=>{
    navigator.clipboard.writeText(resultGlassCode.textContent);
    let proof = document.querySelector('#copyConfirmation');
    proof.classList.add('animationcopy'); setTimeout(function () {
        proof.classList.remove('animationcopy')
    }, 1000)
})



// blur
blurInput.addEventListener('input',()=>{
    inputs.forEach(input => {
        input.style.setProperty('--blur', blurInput.value + 'px');
    });
    blurInputNumber.innerText = blurInput.value;
    document.querySelector('#blurResult').innerText = blurInput.value + "px";
    document.querySelector('#blurResult2').innerText = blurInput.value + "px";

});

// outline
outlineInput.addEventListener('input',()=>{
    inputs.forEach(input => {
        console.log('EEE')
        input.style.setProperty('--outline', outlineInput.value +"px");
    });
    outlineNumber.innerText = outlineInput.value;
    document.querySelector('#outlineResult').innerText = outlineInput.value+"px";

});

//opacity
opacityGlass.addEventListener('input',()=>{
    inputs.forEach(input => {
        input.style.setProperty('--opacity', opacityGlass.value);
    });
    console.log('eeee')
    opacityGlassNumber.innerText = opacityGlass.value
});

//saturation
saturation.addEventListener('input',()=>{
    inputs.forEach(input => {
        input.style.setProperty('--saturation', saturation.value+'%');
        input.style.setProperty('--saturation2', saturation.value+'%');
    });
    saturationNumber.innerText = saturation.value;
    document.querySelector('#saturationResult').innerText = saturation.value + "%";
    document.querySelector('#saturationResult2').innerText = saturation.value + "%";



});

// function to convert color code
function hexToRgb(hex) {
    // Remove the "#" symbol if it exists
    hex = hex.replace("#", "");

    // Convert the hex value to decimal
    const r = parseInt(hex.substring(0,2), 16);
    const g = parseInt(hex.substring(2,4), 16);
    const b = parseInt(hex.substring(4,6), 16);
    console.log(`RGB color: (${r}, ${g}, ${b})`);
    // Return the RGB values as an object

    inputs.forEach(input => {
        input.style.setProperty('--red',r);
        document.querySelector('#red').innerText = r;
        input.style.setProperty('--green',g);
        document.querySelector('#green').innerText = g;
        input.style.setProperty('--blue',b);
        document.querySelector('#blue').innerText = b;
    });


  }

// card color
CardcolorGlass.addEventListener('input',()=>{
        hexToRgb(CardcolorGlass.value)

});


let backgroundColor = document.querySelector(".background-color")
let colorStartInput = document.querySelector('#colorStartInput');
let colorIntensityStartInput = document.querySelector('#colorIntensityStartInput');
let colorEndInput = document.querySelector('#colorEndInput');
let intensityBGEndGradient = document.querySelector('#intensityBGEndGradient');
let gradientDirection = document.querySelector('#gradientDirection');
let bgSolidColor = document.querySelector('#bgSolidColor');


let solidBG_input = document.querySelector('#solidBG_input');
let gradientBackgroundInput = document.querySelector('#gradientBackgroundInput');

solidBG_input.addEventListener('click',()=>{
    if(solidBG_input.checked){
        backgroundColor.style.background = bgSolidColor.value;
        document.querySelector('.inputSolidBg').classList.add('appear');
        document.querySelector('.gradientContainer').classList.remove('appear');
        gradientBackgroundInput.checked = false;

    }else{
        backgroundColor.removeAttribute("style");
        document.querySelector('.inputSolidBg').classList.remove('appear');
        document.querySelector('.gradientContainer').classList.add('appear');
        gradientBackgroundInput.checked = true;
    }
});

gradientBackgroundInput.addEventListener('click',()=>{
    if(gradientBackgroundInput.checked){
        backgroundColor.removeAttribute("style");
        document.querySelector('.inputSolidBg').classList.remove('appear');
        document.querySelector('.gradientContainer').classList.add('appear');
        solidBG_input.checked = false;
    }else{
        backgroundColor.style.background = bgSolidColor.value;
        document.querySelector('.inputSolidBg').classList.add('appear');
        document.querySelector('.gradientContainer').classList.remove('appear');
        solidBG_input.checked = true;
    }

})


colorStartInput.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGcolorStart', colorStartInput.value);
})

colorIntensityStartInput.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGcolorStartIntensity', colorIntensityStartInput.value+"%");
})

colorEndInput.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGcolorEnd', colorEndInput.value);
})

intensityBGEndGradient.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGcolorEndIntensity', intensityBGEndGradient.value+"%");
})

gradientDirection.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGdirection', gradientDirection.value+"deg");
})

bgSolidColor.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGsolidColor', bgSolidColor.value);
    backgroundColor.style.background = bgSolidColor.value;
})


let borderRadiusGlass = document.querySelector('#borderRadiusGlass');

borderRadiusGlass.addEventListener('input',()=>{
    console.log('ffff')
    inputs.forEach(input => {
        input.style.setProperty('--borderRadiusValue', borderRadiusGlass.value+"px");
    });
    document.querySelector('#borderRadiusResults').innerText = borderRadiusGlass.value+"px";
})









// generator old

let $glassGen;

let $bevelOn;
let $bevelValue;
let $noiseOn;
let $noiseValue;
let $shadowOn;
let $shadowValue;
let $colorOn;
let $colorValue;
let $filterOn;
let $filterValue;

// function onSwitchChange(e) {
//   const $switch = e.target;
//   const $switchParents = $switch.parentNode.parentNode.parentNode;
//   const $switchGroup = $switchParents.querySelector(".js-switchGroup");
//   const $thisToSwitch = $switchParents.querySelector(".js-toSwitch");
//   const $ariaChecked = $switch.getAttribute("aria-checked") === "true" || false;
//   const $switchId = $switch.id;
//   const $thisContent = $switchParents.querySelector(".js-accordionContent");
//   const $expanded = $thisToSwitch.getAttribute("aria-expanded") === "true" || false;
//   const $thisIcon = $thisToSwitch.querySelector(".js-accordionIcon");

//   /* If accordion is switched off while expanded -> close it */
//   function closeAccordion() {
//     if($expanded) {
//       $thisToSwitch.setAttribute("aria-expanded", false);
//       $thisToSwitch.classList.add("is-closed");
//       $thisIcon.classList.add("is-closed");
//       $thisContent.classList.add("is-closed");
//     }
//   }

// /* Switch on/off */
//   function toggleSwitch() {
//     if ($ariaChecked) {
//       $switchGroup.classList.add("is-off");
//       $thisToSwitch.setAttribute("disabled", true);
//       $switch.ariaChecked = false;
//       closeAccordion();
//       toggleGlassLayers($switchId, true);
//       // console.log($switchId + " is off");

//     } else {
//       $switchGroup.classList.remove("is-off");
//       $thisToSwitch.removeAttribute("disabled");
//       $switch.ariaChecked = true;
//       toggleGlassLayers($switchId, false);
//       // console.log($switchId + " is ON");
//     }
//   }
//   toggleSwitch();
// }


/* Find what switch was changed & set its layer's on/off value */
// function toggleGlassLayers($id, $isOff) {
//   // console.log($id + " is off " + $isOff);

//   if($id == "js-bevelSwitch") {
//     setBevelvalue($isOff);
//   }

//   // if($id == "js-colorSwitch") {
//   //   if($isOff == true) {
//   //     setColor(`transparent`);
//   //   } else {
//   //     setColor(`var(--tint-xdark)`);
//   //   }
//   // }

//   // if($id == "js-noiseSwitch") {
//   //   setNoiseValue($isOff);
//   // }

//   // if($id == "js-shadowSwitch") {
//   //   setShadowValue($isOff);
//   // }

//   // if($id == "js-filterSwitch") {
//   //   if($isOff == true) {
//   //     setFilter(`none`);
//   //   } else {
//   //     setFilter(`blur(var(--blur)) brightness(var(--bright)) saturate(var(--satu))`);
//   //   }
//   // }
// }

/* Bevels */
/* ========================================== */
// function setBevelvalue($isOff) {
//   if($isOff) {
//     $bevelValue = `none`;
//   } else {
//     $bevelValue = document.querySelector('input[name="bevels"]:checked').value;
//   }

//   setBevel($bevelValue);
// }

// function setBevel($value) {
//   $glassGen.forEach(($glass) => {
//     $glass.style.setProperty("--bevel", `${$value}`);
//   });
//   console.log("bevel value: " + $value);
// }

/* Colors */
/* ========================================== */
// function setColorValue($isOff) {
//   if($isOff) {
//     $colorValue = `none`;
//   } else {
//     $colorValue = document.querySelector('input[name="color"]:checked').value;
//   }

//   setColor($colorValue);
// }

// function setColor($value) {
//   $glassGen.forEach(($glass) => {
//     $glass.style.setProperty("--color", `${$value}`);
//   });
// }

/* Noise */
/* ========================================== */
// function setNoiseValue($isOff) {
//   if($isOff) {
//     $noiseValue = `none`;
//   } else {
//     $noiseValue = document.querySelector('input[name="noise"]:checked').value;
//   }

//   setNoise($noiseValue);
// }

// function setNoise($value) {
//   $glassGen.forEach(($glass) => {
//     $glass.style.setProperty("--noise", `${$value}`);
//   });

//   console.log("noise value: " + $value);
// }

/* Shadows*/
/* ========================================== */
// function setShadowValue($isOff) {
//   if($isOff) {
//     $shadowValue = `none`;
//   } else {
//     $shadowValue = document.querySelector('input[name="shadows"]:checked').value;
//   }

//   setShadow($shadowValue);
// }

// function setShadow($value) {
//   $glassGen.forEach(($glass) => {
//     $glass.style.setProperty("--shadow", `${$value}`);
//   });
//   console.log("shadow value: " + $value);
// }

/* Filters */
/* ========================================== */
// function setFilter($value) {
//   $glassGen.forEach(($glass) => {
//     $glass.style.setProperty("--filter", `${$value}`);
//   });
// }


// function setSwitch($accSwitch) {
//   let checked = $accSwitch.GetAttribute("checked");
//   if (checked) {
//     switchOn($accSwitch);
//   } else if (!checked) {
//     switchOff($accSwitch);
//   } else {
//     console.log('Can not set switch on/off');
//   }
// }

function setSwitch($switch, $checked) {
  let $switchId = $switch.id;
  // let $checked = $switch.checked;
  let $ariaChecked = $switch.ariaChecked;
  // let $ariaChecked = $switch.getAttribute("aria-checked") === "true" || false;

  let $switchParents = $switch.parentNode.parentNode.parentNode;
  let $switchGroup = $switchParents.querySelector(".js-switchGroup");

  let $thisToSwitch = $switchParents.querySelector(".js-toSwitch");
  let $thisIcon = $thisToSwitch.querySelector(".js-accordionIcon");
  let $thisContent = $switchParents.querySelector(".js-accordionContent");
  let $expanded = $thisToSwitch.getAttribute("aria-expanded") === "true" || false;

console.log($switch);
console.log("is checked " + $checked);
console.log($switchId + " is aria checked " + $ariaChecked);
// console.log("getAttribute " + $checked);


  // function closeAccordion() {
  //   $thisToSwitch.setAttribute("aria-expanded", false);
  //   $thisToSwitch.classList.add("is-closed");
  //   $thisIcon.classList.add("is-closed");
  //   $thisContent.classList.add("is-closed");
  // }

  // function openAccordion() {
  //   $thisToSwitch.setAttribute("aria-expanded", true);
  //   $thisToSwitch.classList.remove("is-closed");
  //   $thisIcon.classList.remove("is-closed");
  //   $thisContent.classList.remove("is-closed");
  // }

  if($checked) {
    $switch.ariaChecked = "true";
    $switchGroup.classList.remove("is-off");
    $thisToSwitch.removeAttribute("disabled");

    // openAccordion();
    // toggleGlassLayers($switchId, false);

    console.log($switchId + " is now ON");
  } else {
      $switch.ariaChecked = "false";
      $switchGroup.classList.add("is-off");
      $thisToSwitch.setAttribute("disabled", true);

      // closeAccordion();
      // toggleGlassLayers($switchId, true);

      console.log($switchId + " is now OFF");
  }
}

function onSwitchChange($switch) {
  let $checked = $switch.checked
  setSwitch($switch, !$checked);
}

function initializeGenerator() {
  $glassGen = document.querySelectorAll(".glass-3d-gen");

  const accSwitchArray = Array.from(document.querySelectorAll(".js-accordionSwitch"));

  accSwitchArray.forEach(($switch) => {
    let $checked = $switch.checked;

    // Query switches and set their inital on/off values
    setSwitch($switch, $checked);

    // Update switch on/off values on Change event
    // $switch.addEventListener("change", setSwitch($switch, $checked));
    $switch.addEventListener("change", onSwitchChange($switch));

    // setSwitch($accSwitch, $checked);
    // if ($checked) {
    //   // switchOn();
    //   setSwitch($accSwitch, $checked);
    // } else {
    //   // switchOff();
    //   setSwitch($accSwitch, $checked);
    // }
  });

  // function initialSwitch() {

  // }
  // initialSwitch();

  // /* Bevels */
  // $bevelValue = document.querySelector('input[name="bevels"]:checked').value;
  // $bevelRadios = document.querySelectorAll('input[name="bevels"]');
  // $bevelRadios.forEach(($radio) => {
  //   $radio.addEventListener("change", (event) => {
  //     setBevel(`${event.target.value}`);
  //     // console.log(`Bevel ${event.target.value}`);
  //   });
  // });

  // /* Noise */
  // $noiseValue = document.querySelector('input[name="noise"]:checked').value;
  // $noiseRadios = document.querySelectorAll('input[name="noise"]');
  // $noiseRadios.forEach(($radio) => {
  //   $radio.addEventListener("change", (event) => {
  //     setNoise(`${event.target.value}`);
  //     // console.log(`Noise ${event.target.value}`);
  //   });
  // });

  // /* Shadows*/
  // $shadowValue = document.querySelector('input[name="shadows"]:checked').value;
  // $shadowRadios = document.querySelectorAll('input[name="shadows"]');
  // $shadowRadios.forEach(($radio) => {
  //   $radio.addEventListener("change", (event) => {
  //     setShadow(`${event.target.value}`);
  //     // console.log(`Shadow ${event.target.value}`);
  //   });
  // });

  // /* Color */
  // $colorValue = document.querySelector('input[name="color"]:checked').value;
  // $colorRadios = document.querySelectorAll('input[name="color"]');
  // $colorRadios.forEach(($radio) => {
  //   $radio.addEventListener("change", (event) => {
  //     setColor(`${event.target.value}`);
  //     // console.log(`Color:  ${event.target.value}`);
  //   });
  // });

};
