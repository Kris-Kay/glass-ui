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

  fetch('/html/builder.html')
    .then(response => response.text())

    .then(html => {
      container.innerHTML = html;
      callFindFunctions();
    })

    .catch(error => console.error(error));
}
fetchHome();


// document.onreadystatechange = () => {
//   if (document.readyState === "complete") {
//     callFindFunctions();
//   }
// };

// document.addEventListener("readystatechange", (event) => {
//   if (event.target.readyState === "interactive") {
//     console.log("I'm still loading UwU;");
//   } else if (event.target.readyState === "complete") {
//     callFindFunctions();
//   }
// });