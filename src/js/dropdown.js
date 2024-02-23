/* ========================================== */
/* Open & Close dropdown */
/* ========================================== */

const $btn = document.getElementById("js-dropdownToggle");
const $ham = document.getElementById("js-navHam");
const $x = document.getElementById("js-navX");
const $dd = document.getElementById("js-navDropdown");
const $ddBG = document.getElementById("js-dropdown-bg");
const $ddItems = $dd.querySelectorAll(".js-dropdownItem");
const $ddArray = Array.from($ddItems);

$btn.onclick = () => {
  $ham.classList.toggle("hidden");
  $x.classList.toggle("hidden");
  $ddBG.classList.toggle("hidden");
};

// onClick for each item -> close dropdown
$ddArray.forEach((item) => {
  item.onclick = () => {
    $ham.classList.remove("hidden");
    $x.classList.add("hidden");
    $ddBG.classList.add("hidden");
  };
});

// onClick outside the menu -> close dropdown
document.addEventListener('click', (e) => {
  if (!$ddBG.contains(e.target) && !$btn.contains(e.target)) {
    $ham.classList.remove("hidden");
    $x.classList.add("hidden");
    $ddBG.classList.add("hidden");
  }
});