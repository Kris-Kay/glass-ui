/* ========================================== */
/* Tab menu */
/* ========================================== */

function findTabs() {
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
      // $tabs[$tabFocus].setAttribute("tabindex", -1);
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

      // $tabs[$tabFocus].setAttribute("tabindex", 0);
      $tabs[$tabFocus].focus();
    }
  });
};

// document.addEventListener("DOMContentLoaded", () =>
// {
//   findTabs();
// });

function changeTabs(e) {
  const $thisTab = e.target;
  const $thisTabList = $thisTab.parentNode;
  const $thisPanelId = $thisTab.getAttribute("aria-controls");
  const $thisPanelWrap = document.getElementById(`${$thisPanelId}`).parentNode;
  const $panels = $thisPanelWrap.querySelectorAll('[role="tabpanel"]');
  const $thisPanel = document.getElementById(`${$thisPanelId}`);
  // console.log($thisPanel);
  e.preventDefault();
  // Remove all current selected tabs
  $thisTabList
    .querySelectorAll('[aria-selected="true"]')
    .forEach((t) => t.setAttribute("aria-selected", false));

  // Set this tab as selected
  $thisTab.setAttribute("aria-selected", true);
  // console.log($thisTab);

  // Hide all tab panels
  $panels.forEach((p) => p.setAttribute("hidden", true));

  // Show the selected panel
  $thisPanel.removeAttribute("hidden");
};
