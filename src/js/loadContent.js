document.addEventListener("DOMContentLoaded", () =>
{
// Select the element where you want to insert the HTML content
  const container = document.querySelector('#js-content');

  fetch('/html/home.html')
    .then(response => response.text())
    .then(html => {
      // Insert the HTML content into the container element
      container.innerHTML = html;
      findTabs();
      findAccordions();
      findCopyBtns();
    })
    .catch(error => console.error(error));

  function fetchHome() {
    // Fetch the HTML content from a separate file
    fetch('/html/home.html')
      .then(response => response.text())
      .then(html => {
        // Insert the HTML content into the container element
        container.innerHTML = html;
        // console.log("home loaded");
        findTabs();
        findAccordions();
        findCopyBtns();
      })
      .catch(error => console.error(error));
  }

  // Add a click event handler
  // $homeBtns.forEach((home) => {
  //   home.addEventListener("click", fetchHome);
  // });
});