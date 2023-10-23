/* ================================== */
/* Accordion JS */
/* ================================== */

function findAccordions()
{
  let $accordionToggles = document.querySelectorAll(".js-accordionToggle");
  let $toggleArray = Array.from($accordionToggles);
  // console.log($toggleArray);

  toggleAccordion = (e) => {
    e.preventDefault();

    let $thisToggle = e.target;

    let $thisHeader = e.target.parentNode.parentNode;

    let $thisContent = $thisHeader.nextElementSibling;

    console.log($thisToggle);
    console.log($thisHeader);
    console.log($thisContent);

    $thisToggle.classList.toggle("is-closed");
    $thisHeader.classList.toggle("is-closed");;
    $thisContent.classList.toggle("is-closed");
  };

  $toggleArray.forEach((toggle) => {
    toggle.addEventListener("click", toggleAccordion);
  });
};

document.addEventListener("DOMContentLoaded", () =>
{
  findAccordions();
});