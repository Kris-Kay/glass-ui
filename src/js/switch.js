/* ========================================== */
/* Switches */
/* ========================================== */
function onSwitchClick(e) {
  const $thisSwitch = e.target;

  if ($thisSwitch.getAttribute("aria-checked") === "true") {
    $thisSwitch.setAttribute("aria-checked", "false");
  } else {
    $thisSwitch.setAttribute("aria-checked", "true");
  }
}

function findSwitches() {
  document.querySelectorAll(".js-switch").forEach((jsSwitch) => {
    jsSwitch.addEventListener("click", onSwitchClick);
  });
};

/* findSwitches() is called in fetchContent.js */
