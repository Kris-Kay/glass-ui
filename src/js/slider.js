/* ========================================== */
/* Slider */
/* ========================================== */

function initSliders() {
  const $sliderGroups = document.querySelectorAll(".js-slider-w-display");
  // const $slider = document.querySelector(".js-slider-w-display");
  // const $display = document.querySelector(".js-value-display");

  $sliderGroups.forEach($group => {
    const $slider = $group.querySelector(".js-slider-ui");
    const $display = $group.querySelector(".js-value-display");

    // console.log($group + " group");
    // console.log($slider + " slider");
    // console.log($display + " display");

    // Apply progressBar and change the value of the text.
    $slider.addEventListener("input", event => {
      $display.setAttribute("data-length", event.target.value);
      progressDisplay(event.target, $display);
    });

    // Pass slider progressDisplay func.
    progressDisplay($slider, $display);

    // setSliderValue($slider, $display);

    // $slider.addEventListener("input", () => {
    //   setSliderValue($slider, $display);
    // });
  });


  // Progress gradient
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

    // console.log($percent + " %");

    $slider.style.background = $gradient;

    $display.setAttribute("data-length", $slider.value);
    $display.style.left = `${$where}px`;
  }
}



// function setSliderValue($slider, $display) {
//   const $sliderW = $slider.offsetWidth;
//   const $displayW = $display.offsetWidth;
//   const $val = $slider.value;
//   const $min = $slider.min ? $slider.min : 0;
//   const $max = $slider.max ? $slider.max : 100;
//   const $deciVal = Number(($val - $min) / ($max - $min));
//   const $progress = Math.round($deciVal * ($sliderW - $displayW));

//   // console.log($slider.id + " " + $val + " val");

//   $display.style.left = `${$progress}px`;
//   $display.innerHTML = $val;
// }

  // document.querySelectorAll(".js-slider-w-display").forEach(($group) => {
  //   const $slider = $group.querySelector(".js-slider-ui");
  //   const $display = $group.querySelector(".js-value-display");

  //   setSliderValue($slider, $display);

  //   $slider.addEventListener("input", setSliderValue($slider, $display));
  // });


// function findSliderGroups() {
//   const $sliderGroups = document.querySelectorAll(".js-slider-w-display");

//   $sliderGroups.forEach($group => {
//     const $slider = $group.querySelector(".js-slider-ui");
//     const $display = $group.querySelector(".js-value-display");
//     console.log($group + " sliderDisplay");
//     setSliderValue($slider, $display);

//     $slider.addEventListener("input", () => {
//       setSliderValue($slider, $display);
//     });
//   });
// }




///////////

  // Apply progressBar and change the value of the text.
  // $slider.querySelector("input").addEventListener("input", event => {
  //   $display.setAttribute("data-length", event.target.value);
  //   progressDisplay(event.target);
  // });

  // Pass slider progressDisplay func.
  // progressDisplay($slider.querySelector("input"));

  // // Progress gradient
  // function progressDisplay($slider) {
  //   const $progressColor = "hsla(190, 90%, 50%, 0.5)";
  //   const $bgcolor = "hsla(205, 20%, 10%, 0.25)";
  //   const $min = $slider.min ? $slider.min : 0;
  //   const $max = $slider.max ? $slider.max : 100;
  //   const $percent = (100 * ($slider.value - $min)) / ($max - $min);

  //   const $gradient = `linear-gradient(90deg, ${$progressColor} ${$percent}%, ${$bgcolor} ${$percent + 0.1}%)`;

  //   $slider.style.background = $gradient;

  //   $display.setAttribute("data-length", $slider.value);
  // }


/////////

// function initSliders() {

//   //Slider colors for $gradient
//   const sliderConfig = {
//     progressBar: "hsla(190, 90%, 50%, 0.5)",
//     sliderBg: "hsla(205, 20%, 10%, 0.25)",
//   };

//   // const $sliderGroups = document.querySelectorAll(".js-slider-w-display");
//   const slider = document.querySelector(".range__slider");

// // const $display = $group.querySelector(".js-value-display");
//   const sliderValue = document.querySelector(".length__title");

//   // Apply progressBar and change the value of the text.
//   slider.querySelector("input").addEventListener("input", event => {
//     sliderValue.setAttribute("data-length", event.target.value);
//     applyFill(event.target);
//   });

//   // Pass slider applyFill func.
//   applyFill(slider.querySelector("input"));

//   // Create the progress color and set it
//   function applyFill(slider) {
//     const $percent = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
//     const $gradient = `linear-gradient(90deg, ${sliderConfig.progressBar} ${$percent}%, ${sliderConfig.sliderBg} ${$percent + 0.1}%)`;
//     slider.style.background = $gradient;
//     sliderValue.setAttribute("data-length", slider.value);
//   }
// }
