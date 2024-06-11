/* ========================================== */
/* Accordion */
/* ========================================== */
function toggleAccordion(e) {
  const $thisToggle = e.target;
  const $thisAccordion = $thisToggle.parentNode.parentNode;
  const $expanded = $thisToggle.getAttribute("aria-expanded") === "true" || false;
  const $thisIcon = $thisToggle.querySelector(".js-accordionIcon");
  const $thisContent = $thisAccordion.querySelector(".js-accordionContent");

  if($thisContent) {
    $thisToggle.setAttribute("aria-expanded", !$expanded);
    $thisToggle.classList.toggle("is-closed");
    $thisIcon.classList.toggle("is-closed");
    $thisContent.classList.toggle("is-closed");
  } else {
    console.log("Accordion content not found.");
  }
};


function findAccordions() {
  document.querySelectorAll(".js-accordion-btn").forEach((accordionBtn) => {
    accordionBtn.addEventListener("click", toggleAccordion);
  });
};

/* findAccordions() is called in loadContent.js */