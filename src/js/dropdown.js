/* ========================================== */
/* Open & Close dropdown */
/* ========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const $ddToggle = document.getElementById("js-dropdownToggle");
  const $dd = document.getElementById("js-navDropdown");
  const $ddHeight = $dd.offsetHeight;
  const $ddItemArray = Array.from($dd.querySelectorAll(".js-dropdownItem "));

  const closeDropdown = () => {
    $ddToggle.classList.add("is-closed");
    $ddToggle.setAttribute("aria-expanded", false);
    $dd.classList.add("is-closed");
    document.removeEventListener("click", closeViaOutside);
    document.removeEventListener("keyup", closeViaEsc);
    $ddItemArray.forEach((ddItem) => {
      ddItem.setAttribute("tabindex", "-1");
    });
  };

  const toggleDropdown = () => {
    let isClosed = $dd.classList.contains("is-closed");

    if (!isClosed) {
      closeDropdown();
    } else {
      $ddToggle.classList.remove("is-closed");
      $ddToggle.setAttribute("aria-expanded", true);
      $dd.classList.remove("is-closed");
      document.addEventListener("click", closeViaOutside);
      document.addEventListener("keyup", closeViaEsc);
      $ddItemArray.forEach((ddItem) => {
        ddItem.setAttribute("tabindex", "0");
      });
    }
  }

  // Close dropdown by clicking outside its background
  const closeViaOutside = (e) => {
    if (!$dd.contains(e.target) && e.target !== $ddToggle ) {
      closeDropdown();
    }
  };

  // Close dropdown with ESC key
  const closeViaEsc = ("keyup", (e) => {
    if (e.key === 'Escape') {
      closeDropdown();
    };
  });

  $dd.style.setProperty("--dropdown-h", `-${$ddHeight}px`);
  $ddToggle.addEventListener("click", toggleDropdown);
});
