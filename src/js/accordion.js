/* ========================================== */
/* Accordion */
/* ========================================== */

function toggleAccordion(e) {
  const $thisBtn = e.target;
  let $expanded = $thisBtn.getAttribute("aria-expanded") === "true" || false;
  const $thisAccordion = $thisBtn.parentNode.parentNode;
  const $thisDown = $thisBtn.querySelector(".js-down");
  const $thisUp = $thisBtn.querySelector(".js-up");
  const $thisContent = $thisAccordion.querySelector(".js-accordion-content");

  if($thisContent) {
    $thisBtn.classList.toggle("is-closed");
    $thisBtn.setAttribute("aria-expanded", !$expanded);
    // $thisAccordion.classList.toggle("is-closed");
    $thisDown.classList.toggle("is-closed");
    $thisUp.classList.toggle("is-closed");
    $thisContent.classList.toggle("is-closed");
  } else {
    console.log("Accordion content not found.");
  }
};

function findAccordions() {
  const $accordionsArray = Array.from(document.querySelectorAll(".js-accordion"));

  $accordionsArray.forEach((accordion) => {
    accordion.addEventListener("click", toggleAccordion);
  });
};

/* findAccordions() is called in loadContent.js */