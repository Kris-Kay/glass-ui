/* ========================================== */
/* Accordion */
/* ========================================== */

function toggleAccordion(e) {
  const $thisBtn = e.target;
  const $thisAccordion = $thisBtn.parentNode.parentNode;
  const $expanded = $thisBtn.getAttribute("aria-expanded") === "true" || false;
  const $thisIcon = $thisBtn.querySelector(".js-icon");
  const $thisContent = $thisAccordion.querySelector(".js-accordion-content");

  if($thisContent) {
    $thisBtn.setAttribute("aria-expanded", !$expanded);
    $thisBtn.classList.toggle("is-closed");
    $thisIcon.classList.toggle("is-closed");
    $thisContent.classList.toggle("is-closed");
  } else {
    console.log("Accordion content not found.");
  }
};

function findAccordions() {
  let $accordionsArray = Array.from(document.querySelectorAll(".js-accordion-btn"));

  $accordionsArray.forEach((accordion) => {
    accordion.addEventListener("click", toggleAccordion);
  });
};

/* findAccordions() is called in loadContent.js */