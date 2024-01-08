/* ================================== */
/* Theme Toggle */
/* ================================== */

const setTheme = (active = true) => {
  const $root = document.documentElement;
  const $moon = document.querySelector("#js-dark");
  const $sun = document.querySelector("#js-light");

  $root.classList.add('root-transition');
  window.setTimeout(function() {
    $root.classList.remove('root-transition');
  }, 1000);

  if (active) {
    $root.setAttribute("data-theme", "default");
    localStorage.setItem("theme", "default");
    $moon.classList.add("hidden");
    $sun.classList.remove("hidden");

  } else {
    $root.setAttribute("data-theme", "high-contrast");
    localStorage.setItem("theme", "high-contrast");
    $moon.classList.remove("hidden");
    $sun.classList.add("hidden");
  }
};

const toggleTheme = () => {
  const theme = document.querySelector(":root").getAttribute("data-theme");
  setTheme(theme === "high-contrast");
};


const initTheme = () => {
  const $storageTheme = localStorage.getItem("theme");
  // const $prefersTheme = window.matchMedia("(prefers-color-scheme: dark)");
  // let active = $prefersTheme.matches;
  let active = true;

  if ($storageTheme === "default") {
    active = true;
  }

  if ($storageTheme === "high-contrast") {
    active = false;
  }

  setTheme(active);

  const $toggleBtn = document.querySelector(".js-themeToggle");
  $toggleBtn.addEventListener("click", toggleTheme);
};

initTheme();







// const setDarkMode = (active = false) => {
//   const $root = document.documentElement;
//   const $moon = document.querySelector("#js-dark");
//   const $sun = document.querySelector("#js-light");

//   $root.classList.add('root-transition');
//   window.setTimeout(function() {
//     $root.classList.remove('root-transition');
//   }, 1000);

//   if (active) {

//     $root.setAttribute("data-theme", "dark");
//     localStorage.setItem("theme", "dark");
//     $moon.classList.add("hidden");
//     $sun.classList.remove("hidden");

//   } else {
//     $root.setAttribute("data-theme", "light");
//     localStorage.setItem("theme", "light");
//     $moon.classList.remove("hidden");
//     $sun.classList.add("hidden");
//   }
// };

// const toggleDarkMode = () => {
//   const theme = document.querySelector(":root").getAttribute("data-theme");
//   setDarkMode(theme === "light");
// };

// const initDarkMode = () => {
//   const query = window.matchMedia("(prefers-color-scheme: dark)");
//   const themePreference = localStorage.getItem("theme");

//   let active = query.matches;
//   if (themePreference === "dark") {
//     active = true;
//   }
//   if (themePreference === "light") {
//     active = false;
//   }

//   setDarkMode(active);

//   query.addListener((e) => setDarkMode(e.matches));

//   const toggleButton = document.querySelector(".js-themeToggle");
//   toggleButton.addEventListener("click", toggleDarkMode);
// };

// initDarkMode();