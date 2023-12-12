/* ================================== */
/* Accordion JS */
/* ================================== */

function findAccordions() {
  let $accordionToggles = document.querySelectorAll(".js-accordionToggle");
  let $toggleArray = Array.from($accordionToggles);
  // console.log($toggleArray);

  toggleAccordion = (e) => {
    e.preventDefault();

    let $thisToggle = e.target;
    let $thisAccordion = e.target.parentNode;
    let $thisContent = $thisAccordion.nextElementSibling;

    // console.log($thisToggle);
    // console.log($thisAccordion);
    // console.log($thisContent);

    $thisToggle.classList.toggle("is-closed");
    $thisAccordion.classList.toggle("is-closed");;
    $thisContent.classList.toggle("is-closed");
  };

  $toggleArray.forEach((toggle) => {
    toggle.addEventListener("click", toggleAccordion);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  findAccordions();
});