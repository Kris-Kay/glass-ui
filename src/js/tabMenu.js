/* ========================================== */
/* Tab menu */
/* ========================================== */

function findTabs() {
  const $tabList = Array.from(document.querySelectorAll(".js-tabList"));
  const $tabs = Array.from(document.querySelectorAll(".js-tab"));

  // Add a click event handler to each tab
  $tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabs);
  });

  // Enable arrow navigation between tabs in the tab list
  let $tabFocus = 0;

  $tabList.forEach(($list) => {
    $list.addEventListener("keydown", (e) => {
      // Move right
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
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
        $tabs[$tabFocus].focus();
      }
    });
  });


};


function changeTabs(e) {
  const $thisTab = e.target;
  const $thisTabList = $thisTab.parentNode;
  const $thisPanelId = $thisTab.getAttribute("aria-controls");
  const $thisPanel = document.getElementById(`${$thisPanelId}`);
  const $thisPanelGroup = $thisPanel.parentNode;
  const $thisPanelArray = Array.from($thisPanelGroup.querySelectorAll('[role="tabpanel"]'));

  e.preventDefault();
  // Remove all current selected tabs
  $selectedTabs = $thisTabList.querySelectorAll('[aria-selected="true"]')
  $selectedTabs.forEach((t) => t.setAttribute("aria-selected", false));

  // Set this tab as selected
  $thisTab.setAttribute("aria-selected", true);

  // Hide all tab panels
  $thisPanelArray.forEach((p) => p.setAttribute("hidden", true));

  // Show the selected panel
  $thisPanel.removeAttribute("hidden");
};
