/* ================================== */
/* Accordion JS */
/* ================================== */

//TODO
// const accordionToggles = document.body.querySelectorAll(".js-accordionToggle");
// const toggleArray = Array.from(accordionToggles);
// console.log(toggleArray);

(function () {
  let accordionToggles = document.querySelectorAll(".js-accordionToggle"),
    // setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = "ontouchstart" in window,
    pointerSupported = "pointerdown" in window;

  skipClickDelay = function (e) {
    e.preventDefault();
    e.target.click();
  };

  setAriaAttr = function (el, ariaType, newProperty) {
    el.setAttribute(ariaType, newProperty);
  };

  setAccordionAria = function (el1, el2, expanded) {
    switch (expanded) {
      case "true":
        setAriaAttr(el1, "aria-expanded", "true");
        setAriaAttr(el2, "aria-hidden", "false");
        break;
      case "false":
        setAriaAttr(el1, "aria-expanded", "false");
        setAriaAttr(el2, "aria-hidden", "true");
        break;
      default:
        break;
    }
  };

  //function
  switchAccordion = function (e) {
    e.preventDefault();

    var thisContent = e.target.parentNode.nextElementSibling;
    var thisAccordion = e.target.parentNode.parentNode;
    console.log(thisAccordion);
    var thisToggle = e.target;
    if (thisContent.classList.contains("is-closed")) {
      setAccordionAria(thisToggle, thisContent, "true");
    } else {
      setAccordionAria(thisToggle, thisContent, "false");
    }
    thisToggle.classList.toggle("is-closed");
    thisToggle.classList.toggle("is-open");
    thisContent.classList.toggle("is-closed");
    thisContent.classList.toggle("is-open");
    thisAccordion.classList.toggle("is-closed");
    thisAccordion.classList.toggle("is-open");

    // thisContent.classList.toggle('animateIn');
  };

  for (var i = 0, len = accordionToggles.length; i < len; i++) {
    if (touchSupported) {
      accordionToggles[i].addEventListener(
        "touchstart",
        skipClickDelay,
        false
      );
    }
    if (pointerSupported) {
      accordionToggles[i].addEventListener(
        "pointerdown",
        skipClickDelay,
        false
      );
    }
    accordionToggles[i].addEventListener("click", switchAccordion, false);
  }
})();

