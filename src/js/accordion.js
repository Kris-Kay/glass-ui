/* ========================================== */
/* Accordion */
/* ========================================== */
function toggleAccordion(e) {
  const $thisAccordion = e.target;
  const $thisToggle = $thisAccordion.querySelector(".js-accordionToggle");
  const $thisContent = $thisAccordion.querySelector(".js-accordion-content");

  $thisAccordion.classList.toggle("is-closed");
  $thisToggle.classList.toggle("is-closed");
  $thisContent.classList.toggle("is-closed");
};

function findAccordions() {
  const $accordionsArray = Array.from(document.querySelectorAll(".js-accordion"));

  $accordionsArray.forEach((accordion) => {
    accordion.addEventListener("click", toggleAccordion);
  });
};

/* findAccordions() is called in loadContent.js */