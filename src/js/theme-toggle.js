/* ================================== */
/* Theme Toggle */
/* ================================== */

const setDarkMode = (active = false) => {
  const $root = document.documentElement;
  const $moon = document.querySelector("#js-dark");
  const $sun = document.querySelector("#js-light");

  $root.classList.add('root-transition');
  window.setTimeout(function() {
    $root.classList.remove('root-transition');
  }, 1000);

  if (active) {

    $root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    $moon.classList.add("hidden");
    $sun.classList.remove("hidden");

  } else {
    $root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    $moon.classList.remove("hidden");
    $sun.classList.add("hidden");
  }
};

const toggleDarkMode = () => {
  const theme = document.querySelector(":root").getAttribute("data-theme");
  setDarkMode(theme === "light");
};

const initDarkMode = () => {
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  const themePreference = localStorage.getItem("theme");

  let active = query.matches;
  if (themePreference === "dark") {
    active = true;
  }
  if (themePreference === "light") {
    active = false;
  }

  setDarkMode(active);

  query.addListener((e) => setDarkMode(e.matches));

  const toggleButton = document.querySelector(".js-themeToggle");
  toggleButton.addEventListener("click", toggleDarkMode);
};

initDarkMode();