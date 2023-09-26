/* ================================== */
/* JS */
/* ================================== */

// Open & Close dropdown
/* ================================== */
// const $ham = document.getElementById("js-navHam");
// const $x = document.getElementById("js-navX");
// const $dd = document.getElementById("js-navDropdown");
// const $ddItems = $dd.querySelectorAll(".js-dd-item");
// const ddArray = Array.from($ddItems);

// document.getElementById("js-dropdownToggle").onclick = () => {
//   $ham.classList.toggle("isClosed");
//   $x.classList.toggle("isClosed");
//   $dd.classList.toggle("isClosed");
// };

// // on item click -> close dropdown
// ddArray.forEach((item) => {
//   item.onclick = () => {
//     $ham.classList.add("isClosed");
//     $x.classList.add("isClosed");
//     $dd.classList.add("isClosed");
//   };
// });

// // Tab menu for switching between backgrounds
// /* ================================== */
// const $tabMenu = document.getElementById("js-tabMenu");
// const $bg = document.getElementById("js-bg");
// const $color = document.getElementById("color-tab");
// let $prevTab = $color;

// buttonPressed = (e) => {
//   if (e.target.nodeName === "BUTTON") {
//     if ($prevTab !== e.target) {
//       $prevTab.classList.remove("tab-active");
//     }
//     $prevTab = e.target;
//     // console.log($prevTab);
//     e.target.classList.add("tab-active");

//     if (e.target.id === "dark-tab") {
//       $bg.classList.add("dark");

//       if ($prevTab !== null) {
//         if ($bg.classList.contains("light")) {
//           $bg.classList.remove("light");
//         } else if ($bg.classList.contains("color")) {
//           $bg.classList.remove("color");
//         }
//       }
//     }

//     if (e.target.id === "light-tab") {
//       $bg.classList.add("light");

//       if ($prevTab !== null) {
//         if ($bg.classList.contains("dark")) {
//           $bg.classList.remove("dark");
//         } else if ($bg.classList.contains("color")) {
//           $bg.classList.remove("color");
//         }
//       }
//     }

//     if (e.target.id === "color-tab") {
//       $bg.classList.add("color");

//       if ($prevTab !== null) {
//         if ($bg.classList.contains("light")) {
//           $bg.classList.remove("light");
//         } else if ($bg.classList.contains("dark")) {
//           $bg.classList.remove("dark");
//         }
//       }
//     }
//   }
// };

// $tabMenu.addEventListener("click", buttonPressed);
