document.addEventListener("DOMContentLoaded", () =>
{
// Select the element where you want to insert the HTML content
  const container = document.querySelector('#content');
  const $homeBtns = document.querySelectorAll('.js-home');
  const $docBtns = document.querySelectorAll('.js-doc');
  // const $tutorialBtns = document.querySelectorAll('.js-tutorial');

  // Fetch the HTML content from a separate file
  // fetch('/html/documentation.html')
  fetch('/html/home.html')
    .then(response => response.text())
    .then(html => {
      // Insert the HTML content into the container element
      container.innerHTML = html;
      findTabs();
      findAccordions();
      rectWidth();
      findCopyBtns();
      textSize();
    })
    .catch(error => console.error(error));

  function fetchHome()
  {
    // Fetch the HTML content from a separate file
    fetch('/html/home.html')
      .then(response => response.text())
      .then(html =>
      {
        // Insert the HTML content into the container element
        container.innerHTML = html;
        // console.log("home loaded");
        findTabs();
        findAccordions();
        rectWidth();
        findCopyBtns();
        textSize();
      })
      .catch(error => console.error(error));
  }

  function fetchDoc()
  {
    // Fetch the HTML content from a separate file
    fetch('/html/documentation.html')
      .then(response => response.text())
      .then(html =>
      {
        // Insert the HTML content into the container element
        container.innerHTML = html;
        // console.log("doc loaded");
        rectWidth();
        textSize();
      })
      .catch(error => console.error(error));
  }

  // Add a click event handler
  $homeBtns.forEach((home) =>
  {
    home.addEventListener("click", fetchHome);
  });

  $docBtns.forEach((doc) =>
  {
    doc.addEventListener("click", fetchDoc);
  });

});








///TODO
//   event.preventDefault();
//   $(window).scrollTop(0);