/* ========================================== */
/* Load content */
/* ========================================== */
function callFindFunctions() {
  findTabs();
  findAccordions();
  findSpotlights();
  findCopyBtns();
}

function fetchHome() {
  const container = document.querySelector('#js-content');

  fetch('/html/home.html')
    .then(response => response.text())

    .then(html => {
      container.innerHTML = html;
      callFindFunctions();
    })

    .catch(error => console.error(error));
}

fetchHome();