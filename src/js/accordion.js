/* ================================== */
/* Accordion JS */
/* ================================== */

let accordionToggles = document.querySelectorAll(".js-accordionToggle");
let toggleArray = Array.from(accordionToggles);
console.log(toggleArray);

switchAccordion = (e) => {
  e.preventDefault();

  let thisContent = e.target.parentNode.nextElementSibling;
  let thisAccordion = e.target.parentNode.parentNode;
  let thisToggle = e.target;
  console.log(thisAccordion);
  console.log(thisToggle);
  console.log(thisContent);
  

  thisToggle.classList.toggle("is-closed");
  thisToggle.classList.toggle("is-open");
  thisContent.classList.toggle("is-closed");
  thisContent.classList.toggle("is-open");
  thisAccordion.classList.toggle("is-closed");
  thisAccordion.classList.toggle("is-open");
};

toggleArray.forEach((toggle) => {
  toggle.addEventListener("click", switchAccordion);
});

