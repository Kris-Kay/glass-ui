/* ========================================== */
/* 3d glass generator */
/* ========================================== */

// const $bevelSwitch = document.getElementById("js-bevelSwitch");



function onSwitchChange(e) {
  const $thisSwitch = e.target;
  const $thisSwitchParents = $thisSwitch.parentNode.parentNode.parentNode;
  const $thisSwitchGroup = $thisSwitchParents.querySelector(".js-switchGroup");
  const $thisToSwitch = $thisSwitchGroup.querySelector(".js-toSwitch");
  const $ariaChecked = $thisSwitch.getAttribute("aria-checked") === "true" || false;
  const $switchId = $thisSwitch.id;
  // console.log($thisSwitch);
  // console.log($thisSwitchGroup);
  // console.log($thisToSwitch);

  function toggleSwitch() {
    if ($ariaChecked) {
      $thisSwitchGroup.classList.add("is-off");
      $thisToSwitch.setAttribute("disabled", true);
      $thisSwitch.ariaChecked = false;
      console.log($switchId + "is off");
    } else {
      $thisSwitchGroup.classList.remove("is-off");
      $thisToSwitch.removeAttribute("disabled");
      $thisSwitch.ariaChecked = true;
      console.log($switchId + "is ON");
    }
  }

  toggleSwitch();
}


function findSwitches() {
  document.querySelectorAll(".js-accordionSwitch").forEach(($switch) => {
    $switch.addEventListener("change", onSwitchChange);
  });
};