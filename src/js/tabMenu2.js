/* ================================== */
/* Tab menu 2 */
/* ================================== */

window.addEventListener("DOMContentLoaded", () => {
  const $tabs = document.querySelectorAll('[role="tab"]');
  const $tabList = document.querySelector('[role="tablist"]');

  // Add a click event handler to each tab
  $tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabs);
  });

  // Enable arrow navigation between tabs in the tab list
  let $tabFocus = 0;

  $tabList.addEventListener("keydown", (e) => {
    // Move right
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      $tabs[$tabFocus].setAttribute("tabindex", -1);
      if (e.key === "ArrowRight") {
        $tabFocus++;
        // If we're at the end, go to the start
        if ($tabFocus >= $tabs.length) {
          $tabFocus = 0;
        }
        // Move left
      } else if (e.key === "ArrowLeft") {
        $tabFocus--;
        // If we're at the start, move to the end
        if ($tabFocus < 0) {
          $tabFocus = $tabs.length - 1;
        }
      }

      $tabs[$tabFocus].setAttribute("tabindex", 0);
      $tabs[$tabFocus].focus();
    }
  });
});

function changeTabs(e) {
  const $thisTab = e.target;
  const $thisTabList = $thisTab.parentNode;
  const $panelWrap = document.getElementById("js-panelWrap");
  const $panels = document.querySelectorAll('[role="tabpanel"]');
  const $panelId = $thisTab.getAttribute("aria-controls");
  const $thisPanel = document.getElementById(`${$panelId}`);

  // Remove all current selected tabs
  $thisTabList
    .querySelectorAll('[aria-selected="true"]')
    .forEach((t) => t.setAttribute("aria-selected", false));

  // Set this tab as selected
  $thisTab.setAttribute("aria-selected", true);
  console.log($thisTab);
  // Hide all tab panels
  $panels.forEach((p) => p.setAttribute("hidden", true));

  // Show the selected panel
  $thisPanel.removeAttribute("hidden");
}