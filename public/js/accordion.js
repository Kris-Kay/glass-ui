/* ================================== */
/* Accordion JS */
/* ================================== */

let accordionToggles = document.querySelectorAll(".js-accordionToggle");
let toggleArray = Array.from(accordionToggles);
console.log(toggleArray);

toggleAccordion = (e) => {
  e.preventDefault();

  let thisToggle = e.target;

  let thisAccordionHeader = e.target.parentNode;

  let thisContent = thisToggle.parentNode.nextElementSibling;

  console.log(thisToggle);
  console.log(thisAccordionHeader);
  console.log(thisContent);
  
  thisToggle.classList.toggle("is-closed");
  thisAccordionHeader.classList.toggle("is-closed");;
  thisContent.classList.toggle("is-closed");
};

toggleArray.forEach((toggle) => {
  toggle.addEventListener("click", toggleAccordion);
});





// copy code //
let codeText = document.querySelector('#code-text');
let handleCopyClick = document.querySelector('#copy-code');

handleCopyClick.addEventListener('click', () => {
	let text = codeText.textContent;
	navigator.clipboard.writeText(`${text}`);

	alert(`Code copied to clipboard!`);
});



// {/* <div>
//   <button class="btn" onclick="copyContent()">Copy!</button>
// </div>  */}

// {/* <script>
// let text = document.getElementById('myText').innerHTML;
// const copyContent = async () => {
// try {
//   await navigator.clipboard.writeText(text);
//   console.log('Content copied to clipboard');
// } catch (err) {
//   console.error('Failed to copy: ', err);
// }
// }
// </script>  */}