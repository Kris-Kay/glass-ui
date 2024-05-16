/* ========================================== */
/* Accordion */
/* ========================================== */

function toggleAccordion(e) {
  const $thisBtn = e.target;
  const $thisAccordion = $thisBtn.parentNode.parentNode;
  // const $thisBtn = $thisAccordion.querySelector(".js-accordion-btn");
  const $expanded = $thisBtn.getAttribute("aria-expanded") === "true" || false;
  const $thisIcon = $thisBtn.querySelector(".js-icon");
  const $thisContent = $thisAccordion.querySelector(".js-accordion-content");

  // console.log($thisBtn);

  if($thisContent) {
    $thisBtn.setAttribute("aria-expanded", !$expanded);
    $thisBtn.classList.toggle("is-closed");
    $thisIcon.classList.toggle("is-closed");
    $thisContent.classList.toggle("is-closed");
  } else {
    console.log("Accordion content not found.");
  }
  // console.log(!$expanded);
};

function findAccordions() {
  const $accordionsArray = Array.from(document.querySelectorAll(".js-accordion-btn"));

  $accordionsArray.forEach((accordion) => {
    accordion.addEventListener("click", toggleAccordion);
  });
};

/* findAccordions() is called in loadContent.js */