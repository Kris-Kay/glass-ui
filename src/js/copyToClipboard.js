/* ========================================== */
/* Copy to clipboard */
/* ========================================== */
function copyToClipboard(e) {
  let $thisBtn = e.target;
  let $thisText = $thisBtn.parentNode.parentNode.querySelector(".js-textToCopy");

  // console.log($thisText);

  let $textContent = $thisText.textContent;
  navigator.clipboard.writeText(`${$textContent}`);
  console.log($textContent);

  alert(`Text copied to clipboard!`);
}

function findCopyBtns() {
  let $copyBtnsArray = Array.from(document.querySelectorAll(".js-copyBtn"));

  $copyBtnsArray.forEach((btn) => {
    btn.addEventListener("click", copyToClipboard);
  });
};

/* findCopyBtns() is called in loadContent.js */