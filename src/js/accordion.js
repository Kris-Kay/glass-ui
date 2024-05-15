/* ========================================== */
/* Accordion */
/* ========================================== */

function toggleAccordion(e) {
  const $thisClick = e.target;
  const $thisAccordion = $thisClick.parentNode;
  const $thisBtn = $thisAccordion.querySelector(".js-accordion-btn");
  const $expanded = $thisBtn.getAttribute("aria-expanded") === "true" || false;
  const $thisIcon = $thisBtn.querySelector(".js-icon");
  const $thisContent = $thisAccordion.querySelector(".js-accordion-content");

  console.log($thisClick);
  // console.log($thisAccordion);
  // console.log($thisIcon);
  // console.log($thisContent);

  if($thisContent) {
    $thisBtn.setAttribute("aria-expanded", !$expanded);
    $thisClick.classList.toggle("is-closed");
    $thisIcon.classList.toggle("is-closed");
    $thisContent.classList.toggle("is-closed");
  } else {
    console.log("Accordion content not found.");
  }
  // console.log(!$expanded);
};

function findAccordions() {
  const $accordionsArray = Array.from(document.querySelectorAll(".js-accordion-click"));

  $accordionsArray.forEach((accordion) => {
    accordion.addEventListener("click", toggleAccordion);
  });
};

/* findAccordions() is called in loadContent.js */