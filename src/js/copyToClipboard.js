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
  document.querySelectorAll(".js-copyBtn").forEach(($btn) => {
    $btn.addEventListener("click", copyToClipboard);
      console.log("btn: " + $btn);
  });
};

/* findCopyBtns() is called in fetchContent.js */