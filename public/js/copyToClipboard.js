/* ================================== */
/* Copy to clipboard */
/* ================================== */

// let codeText = document.querySelector("#code-text");
// let handleCopyClick = document.querySelector('#copy-code');

// handleCopyClick.addEventListener('click', () => {
// 	let text = codeText.textContent;
// 	navigator.clipboard.writeText(`${text}`);

// 	alert(`Code copied to clipboard!`);
// });


let $copyBtns = document.querySelectorAll(".js-copyBtn");
let $copyBtnsArray = Array.from($copyBtns);
console.log($copyBtnsArray);

copyToClipboard = (event) => {
  let $thisBtn = event.target;
  let $thisText = $thisBtn.parentNode.parentNode.querySelector(".js-textToCopy");

  console.log($thisText);

  let $textContent = $thisText.textContent;
  console.log($textContent);
	navigator.clipboard.writeText(`${$textContent}`);

	alert(`Text copied to clipboard!`);
}

$copyBtnsArray.forEach((btn) => {
  btn.addEventListener("click", copyToClipboard);
});


// handleCopyClick.addEventListener('click', () => {
// 	let text = codeText.textContent;
// 	navigator.clipboard.writeText(`${text}`);

// 	alert(`Code copied to clipboard!`);
// });

// let $accordionToggles = document.querySelectorAll(".js-accordionToggle");
// let $toggleArray = Array.from($accordionToggles);
// console.log($toggleArray);

// toggleAccordion = (e) => {
//   e.preventDefault();

//   let $thisToggle = e.target;

//   let $thisHeader = e.target.parentNode.parentNode;

//   let $thisContent = $thisHeader.nextElementSibling;

//   console.log($thisToggle);
//   console.log($thisHeader);
//   console.log($thisContent);
  
//   $thisToggle.classList.toggle("is-closed");
//   $thisHeader.classList.toggle("is-closed");;
//   $thisContent.classList.toggle("is-closed");
// };

// $toggleArray.forEach((toggle) => {
//   toggle.addEventListener("click", toggleAccordion);
// });