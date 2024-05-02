/* ========================================== */
/* Open & Close dropdown */
/* ========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const $dropdownToggle = document.getElementById("js-dropdownToggle");
  const $ham = document.getElementById("js-navHam");
  const $x = document.getElementById("js-navX");
  const $dropdown = document.getElementById("js-navDropdown");

  const closeDropdown = () => {
    $ham.classList.remove("hidden");
    $x.classList.add("hidden");
    $dropdown.classList.add("hidden");
    document.removeEventListener("click", closeViaOutside);
    document.removeEventListener("keyup", closeViaEsc);
  };

  const toggleDropdown = () => {
    let isHidden = $dropdown.classList.contains("hidden");

    if (!isHidden) {
      closeDropdown();
    } else {
      $ham.classList.add("hidden");
      $x.classList.remove("hidden");
      $dropdown.classList.remove("hidden");
      document.addEventListener("click", closeViaOutside);
      document.addEventListener("keyup", closeViaEsc);
    }
  }

  // Close dropdown by clicking outside its background
  const closeViaOutside = (e) => {
    let $dropdownBg = document.getElementById("js-dropdown-bg");

    if (!$dropdownBg.contains(e.target) && e.target !== $dropdownToggle ) {
      closeDropdown();
    }
  };

  // Close dropdown with ESC key
  const closeViaEsc = ("keyup", (e) => {
    if (e.key === 'Escape') {
      closeDropdown();
    };
  });

  $dropdownToggle.addEventListener("click", toggleDropdown);
});
