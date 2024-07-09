/* ========================================== */
/* Load content */
/* ========================================== */
function callFindFunctions() {
  findTabs();
  findAccordions();
  initSliders();
  initColorPicker();
  findCopyBtns();
  initializeGenerator();
  findRepositionable();
}

function fetchHome() {
  const container = document.querySelector('#js-content');

  fetch('/html/generator.html')
    .then(response => response.text())

    .then(html => {
      container.innerHTML = html;
      callFindFunctions();
    })

    .catch(error => console.error(error));
}
fetchHome();