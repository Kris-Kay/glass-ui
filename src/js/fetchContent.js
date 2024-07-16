/* ========================================== */
/* Fetch content */
/* ========================================== */
const $contentArea = document.querySelector('#js-content');
const $homeBtns = document.querySelectorAll('.js-homeBtn');
const $aboutBtns = document.querySelectorAll('.js-aboutBtn');
const $contactBtns = document.querySelectorAll('.js-contactBtn');

/* Home */
/* ========================================== */
function fetchHome() {
  fetch('/html/generator.html')
    .then(response => response.text())

    .then(html => {
      $contentArea.innerHTML = html;
      findTabs();
      // findAccordions();
      initSliders();
      initColorPicker();
      findSpotlights();
      findCopyBtns();
      initializeGenerator();
    })

    .catch(error => console.error(error.message));
}
fetchHome();

/* About */
/* ========================================== */
function fetchAbout() {
  fetch('/html/about.html')
    .then(response => response.text())

    .then(html => {
      $contentArea.innerHTML = html;
      findTabs();
      findSpotlights();
      findAccordions();
    })

    .catch(error => console.error(error.message));
}

/* Contact */
/* ========================================== */
function fetchContact() {
  fetch('/html/contact.html')
    .then(response => response.text())

    .then(html => {
      $contentArea.innerHTML = html;
      findTabs();
      findCopyBtns();
      findSpotlights();
    })

    .catch(error => console.error(error.message));
}


/* Event Listeners */
/* ========================================== */
$homeBtns.forEach(($btn) => {
  $btn.addEventListener("click", fetchHome);
});

$aboutBtns.forEach(($btn) => {
  $btn.addEventListener("click", fetchAbout);
});

$contactBtns.forEach(($btn) => {
  $btn.addEventListener("click", fetchContact);
});