/* ================================== */
/* Copy to clipboard */
/* ================================== */
function findCopyBtns()
{
  let $copyBtns = document.querySelectorAll(".js-copyBtn");
  let $copyBtnsArray = Array.from($copyBtns);
  // console.log($copyBtnsArray);

  copyToClipboard = (event) => {
    let $thisBtn = event.target;
    let $thisText = $thisBtn.parentNode.parentNode.querySelector(".js-textToCopy");

    // console.log($thisText);

    let $textContent = $thisText.textContent;
    console.log($textContent);
    navigator.clipboard.writeText(`${$textContent}`);

    alert(`Text copied to clipboard!`);
  }

  $copyBtnsArray.forEach((btn) => {
    btn.addEventListener("click", copyToClipboard);
  });
};

document.addEventListener("DOMContentLoaded", () =>
{
  findCopyBtns();
});