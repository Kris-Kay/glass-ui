/* ================================== */
/* Open & Close dropdown */
/* ================================== */

// 
/* ================================== */
const $ham = document.getElementById("js-navHam");
const $x = document.getElementById("js-navX");
const $dd = document.getElementById("js-navDropdown");
const $ddItems = $dd.querySelectorAll(".js-dropdownItem");
const ddArray = Array.from($ddItems);

document.getElementById("js-dropdownToggle").onclick = () => {
  $ham.classList.toggle("isClosed");
  $x.classList.toggle("isClosed");
  $dd.classList.toggle("isClosed");
};

// on item click -> close dropdown
ddArray.forEach((item) => {
  item.onclick = () => {
    $ham.classList.add("isClosed");
    $x.classList.add("isClosed");
    $dd.classList.add("isClosed");
  };
});