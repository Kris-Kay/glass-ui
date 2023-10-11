/* ================================== */
/* Tab menu */
/* ================================== */

const $tabMenu = document.getElementById("js-tabMenu");
const $bg = document.getElementById("js-bg");
const $dark = document.getElementById("dark-tab");
let $prevTab = $dark;

buttonPressed = (e) => {
  if (e.target.nodeName === "BUTTON") {
    if ($prevTab !== e.target) {
      $prevTab.classList.remove("tab-active");
    }
    $prevTab = e.target;
    // console.log($prevTab);
    e.target.classList.add("tab-active");

    if (e.target.id === "dark-tab") {
      $bg.classList.add("dark");

      if ($prevTab !== null) {
        if ($bg.classList.contains("light")) {
          $bg.classList.remove("light");
        } else if ($bg.classList.contains("color")) {
          $bg.classList.remove("color");
        }
      }
    }

    if (e.target.id === "light-tab") {
      $bg.classList.add("light");

      if ($prevTab !== null) {
        if ($bg.classList.contains("dark")) {
          $bg.classList.remove("dark");
        } else if ($bg.classList.contains("color")) {
          $bg.classList.remove("color");
        }
      }
    }

    if (e.target.id === "color-tab") {
      $bg.classList.add("color");

      if ($prevTab !== null) {
        if ($bg.classList.contains("light")) {
          $bg.classList.remove("light");
        } else if ($bg.classList.contains("dark")) {
          $bg.classList.remove("dark");
        }
      }
    }
  }
};

$tabMenu.addEventListener("click", buttonPressed);