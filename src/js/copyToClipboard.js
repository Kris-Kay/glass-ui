/* ========================================== */
/* Copy to clipboard */
/* ========================================== */

function copyToClipboard(e) {
  let $thisCopyBtn = e.target;
  let $thisText = $thisCopyBtn.parentNode.parentNode.querySelector(".js-textToCopy");

  let $textContent = $thisText.textContent;
  navigator.clipboard.writeText(`${$textContent}`);

  alert(`Text copied to clipboard!`);
}

function findCopyBtns() {
  let $copyBtnsArray = Array.from(document.querySelectorAll(".js-copyBtn"));

  $copyBtnsArray.forEach((btn) => {
    btn.addEventListener("click", copyToClipboard);
  });
};

/* findCopyBtns() is called in loadContent.js */