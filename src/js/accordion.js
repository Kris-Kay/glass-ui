/* ========================================== */
/* Accordion */
/* ========================================== */
function toggleAccordion(e) {
  const $thisToggle = e.target;
  const $thisAccordion = $thisToggle.parentNode.parentNode;
  const $expanded = $thisToggle.getAttribute("aria-expanded") === "true" || false;

console.log("$thisAccordion: " + $thisAccordion.id);

  $thisToggle.setAttribute("aria-expanded", !$expanded);
  $thisAccordion.classList.toggle("is-closed");
};

function findAccordions() {
  document.querySelectorAll(".js-accordionBtn").forEach(($accordionBtn) => {
    $accordionBtn.addEventListener("click", toggleAccordion);
  });
};

/* findAccordions() is called in fetchContent.js */