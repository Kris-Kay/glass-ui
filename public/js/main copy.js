/* ================================== */
/* JS */
/* ================================== */

// Open & Close dropdown
/* ================================== */
const $ham = document.getElementById("js-navHam");
const $x = document.getElementById("js-navX");
const $dd = document.getElementById("js-navDropdown");
const $ddItems = $dd.querySelectorAll(".js-dd-item");
const ddArray = Array.from($ddItems);

document.getElementById("js-dropdownToggle").onclick = () => {
  $ham.classList.toggle("isClosed");
  $x.classList.toggle("isClosed");
  $dd.classList.toggle("isClosed");
};

// on item click -> close dropdown
ddArray.forEach((item) => {
  item.onclick = () => {
    $ham.classList.add("isClosed");
    $x.classList.add("isClosed");
    $dd.classList.add("isClosed");
  };
});

// Tab menu for switching between backgrounds
/* ================================== */
const $tabMenu = document.getElementById("js-tabMenu");
const $bg = document.getElementById("js-bg");
const $color = document.getElementById("color-tab");
let $prevTab = $color;

buttonPressed = (e) => {
  if (e.target.nodeName === "BUTTON") {
    if ($prevTab !== e.target) {
      $prevTab.classList.remove("tab-active");
    }
    $prevTab = e.target;
    // console.log($prevTab);
    e.target.classList.add("tab-active");

    if (e.target.id === "dark-tab") {
      $bg.classList.add("dark");

      if ($prevTab !== null) {
        if ($bg.classList.contains("light")) {
          $bg.classList.remove("light");
        } else if ($bg.classList.contains("color")) {
          $bg.classList.remove("color");
        }
      }
    }

    if (e.target.id === "light-tab") {
      $bg.classList.add("light");

      if ($prevTab !== null) {
        if ($bg.classList.contains("dark")) {
          $bg.classList.remove("dark");
        } else if ($bg.classList.contains("color")) {
          $bg.classList.remove("color");
        }
      }
    }

    if (e.target.id === "color-tab") {
      $bg.classList.add("color");

      if ($prevTab !== null) {
        if ($bg.classList.contains("light")) {
          $bg.classList.remove("light");
        } else if ($bg.classList.contains("dark")) {
          $bg.classList.remove("dark");
        }
      }
    }
  }
};

$tabMenu.addEventListener("click", buttonPressed);

/* Accordion */
/* ================================== */
//uses classList, setAttribute, and querySelectorAll

// const accordionToggles = document.body.querySelectorAll(".js-accordionToggle");
// const toggleArray = Array.from(accordionToggles);
// console.log(toggleArray);

// (function () {
//   let accordionToggles = document.querySelectorAll(".js-accordionToggle"),
//     // setAria,
//     setAccordionAria,
//     switchAccordion,
//     touchSupported = "ontouchstart" in window,
//     pointerSupported = "pointerdown" in window;

//   skipClickDelay = function (e) {
//     e.preventDefault();
//     e.target.click();
//   };

//   setAriaAttr = function (el, ariaType, newProperty) {
//     el.setAttribute(ariaType, newProperty);
//   };

//   setAccordionAria = function (el1, el2, expanded) {
//     switch (expanded) {
//       case "true":
//         setAriaAttr(el1, "aria-expanded", "true");
//         setAriaAttr(el2, "aria-hidden", "false");
//         break;
//       case "false":
//         setAriaAttr(el1, "aria-expanded", "false");
//         setAriaAttr(el2, "aria-hidden", "true");
//         break;
//       default:
//         break;
//     }
//   };

//   //function
//   switchAccordion = function (e) {
//     e.preventDefault();

//     var thisContent = e.target.parentNode.nextElementSibling;
//     var thisAccordion = e.target.parentNode.parentNode;
//     console.log(thisAccordion);
//     var thisToggle = e.target;
//     if (thisContent.classList.contains("is-closed")) {
//       setAccordionAria(thisToggle, thisContent, "true");
//     } else {
//       setAccordionAria(thisToggle, thisContent, "false");
//     }
//     thisToggle.classList.toggle("is-closed");
//     thisToggle.classList.toggle("is-open");
//     thisContent.classList.toggle("is-closed");
//     thisContent.classList.toggle("is-open");
//     thisAccordion.classList.toggle("is-closed");
//     thisAccordion.classList.toggle("is-open");

//     // thisContent.classList.toggle('animateIn');
//   };

//   for (var i = 0, len = accordionToggles.length; i < len; i++) {
//     if (touchSupported) {
//       accordionToggles[i].addEventListener(
//         "touchstart",
//         skipClickDelay,
//         false
//       );
//     }
//     if (pointerSupported) {
//       accordionToggles[i].addEventListener(
//         "pointerdown",
//         skipClickDelay,
//         false
//       );
//     }
//     accordionToggles[i].addEventListener("click", switchAccordion, false);
//   }
// })();

