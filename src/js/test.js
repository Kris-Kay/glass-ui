// const $tabListArray = [...document.querySelectorAll("[role='tablist']")];
// const $tabListArray = document.querySelector("[role='tablist']");
// const TABS = [...$tabListArray.querySelectorAll("[role='tab']")];
// const TABPANELS = [...document.querySelectorAll("[role='tabpanel']")];

function findTabLists() {
  // const $tabpanelArray = Array.from(document.querySelectorAll('[role="tabpanel"]'));
  const $tabListArray = Array.from(document.querySelectorAll(".js-tabList"));
  const $tabArray = Array.from(document.querySelectorAll(".js-tab"));
  // console.log($tabListArray);
  // console.log($tabArray);


function changeTabs(e) {
    const $thisTab = e.target;
    const $thisTabControls = $thisTab.getAttribute("aria-controls");
    // const $thisTabList = e.target.parentNode.parentNode.querySelector(".js-tabList");
    console.log($thisTab);
    console.log($thisTabControls);


  // const $thisTab = e.target;
  // const $thisTabList = $thisTab.parentNode;
  // const $thisPanelId = $thisTab.getAttribute("aria-controls");
  // const $thisPanelWrap = document.getElementById(`${$thisPanelId}`).parentNode;
  // const $panels = $thisPanelWrap.querySelectorAll('[role="tabpanel"]');
  // const $thisPanel = document.getElementById(`${$thisPanelId}`);
  // // console.log($thisPanel);

    // const $thisTabArray = Array.from($thisTabList.querySelectorAll(".js-tab"));
    // const $firstTab = $thisTabArray[0];
    // const $lastTab = $thisTabArray[$thisTabArray.length - 1];
    // const $selectedTab = $thisTabList.querySelector('[aria-selected="true"]');
    // const $selectedTabId = $selectedTab.getAttribute("id");
    // console.log($selectedTabId);


  // e.preventDefault();
  // // Remove all current selected tabs
  // $thisTabList
  //   .querySelectorAll('[aria-selected="true"]')
  //   .forEach((t) => t.setAttribute("aria-selected", false));

  // // Set this tab as selected
  // $thisTab.setAttribute("aria-selected", true);
  // // console.log($thisTab);

  // // Hide all tab panels
  // $panels.forEach((p) => p.setAttribute("hidden", true));

  // // Show the selected panel
  // $thisPanel.removeAttribute("hidden");


    // const showActivePanel = (element) => {
    //   const selectedId = element.target.id;

    //   $tabpanelArray.forEach((e) => {
    //     e.hidden = "true";
    //   });
    //   const activePanel = document.querySelector(
    //     `[aria-labelledby="${selectedId}"]`
    //   );
    //   activePanel.removeAttribute("hidden");
    // };


    // const selectedId = element.target.id;


    // if (id === selectedId) {
    //   e.removeAttribute("tabindex", "0");
    //   e.setAttribute("aria-selected", "true");
    // } else {
    //   e.setAttribute("tabindex", "-1");
    //   e.setAttribute("aria-selected", "false");
    // }

};


  const createKeyboardNavigation = (e) => {
    const $thisTabList = e;
    // const $thisTabList = e.target.parentNode.parentNode.querySelector(".js-tabList");
    // console.log($thisTabList);
    const $thisTabArray = Array.from($thisTabList.querySelectorAll(".js-tab"));
    const $firstTab = $thisTabArray[0];
    const $lastTab = $thisTabArray[$thisTabArray.length - 1];
    // const $selectedTab = $thisTabList.querySelector('[aria-selected="true"]');
    // const $selectedTabId = $selectedTab.getAttribute("id");
    // console.log($selectedTabId);

    $thisTabArray.forEach((tab) => {

      tab.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          if (element == $firstTab) {
            $lastTab.focus();
          } else {
            const focusableElement = $thisTabArray.indexOf(element) - 1;
            $thisTabArray[focusableElement].focus();
          }
        } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          if (element == $lastTab) {
            $firstTab.focus();
          } else {
            const focusableElement = $thisTabArray.indexOf(element) + 1;
            $thisTabArray[focusableElement].focus();
          }
        } else if (e.key === "Home") {
          e.preventDefault();
          $firstTab.focus()
        } else if (e.key === "End") {
          e.preventDefault();
          $lastTab.focus()
        }
      });

    });
};





  $tabListArray.forEach(($tabList) => {
    createKeyboardNavigation($tabList);
  });

  $tabArray.forEach((tab) => {

    tab.addEventListener("click", (tab) => {
      changeTabs(tab);
    });

    // tab.addEventListener("focus", (tab) => {
    //   changeTabs(tab);
    // });

    // element.addEventListener("click", (element) => {
    //   showActivePanel(element), handleSelectedTab(element);
    // });

    // element.addEventListener("focus", (element) => {
    //   showActivePanel(element), handleSelectedTab(element);
    // });
  });

}


// document.onreadystatechange = () => {
//   if (document.readyState === "complete") {
//     findTabLists();
//   }
// };


// createKeyboardNavigation();
// findTabLists();


  // $tabListArray.forEach(($tabList) => {
  //   $tabList.addEventListener("click", (e) => {
  //     createKeyboardNavigation(e);
  //   });
  // });

  // $tabListArray.forEach(($tabList) => {
  //   $tabList.addEventListener("focus", (e) => {
  //     createKeyboardNavigation(e);
  //   });
  // });


  // const showActivePanel = (element) => {
  //   const selectedId = element.target.id;

  //   $tabpanelArray.forEach((e) => {
  //     e.hidden = "true";
  //   });
  //   const activePanel = document.querySelector(
  //     `[aria-labelledby="${selectedId}"]`
  //   );
  //   activePanel.removeAttribute("hidden");
  // };



  // const handleSelectedTab = (element) => {
  //   const selectedId = element.target.id;

  //   $tabArray.forEach((e) => {
  //     const id = e.getAttribute("id");
  //     if (id === selectedId) {
  //       e.removeAttribute("tabindex", "0");
  //       e.setAttribute("aria-selected", "true");
  //     } else {
  //       e.setAttribute("tabindex", "-1");
  //       e.setAttribute("aria-selected", "false");
  //     }
  //   });
  // };


/* ========================================== */
/* Tab menu */
/* ========================================== */
function changeTabs(e) {
  const $thisTab = e.target;
  // const $thisTabList = $thisTab.parentNode;
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


function findTabLists() {
  const $tabLists = document.querySelector('[role="tablist"]');
  const $tabs = document.querySelectorAll('[role="tab"]');
  const $tabListArray = Array.from(document.querySelectorAll(".js-tabList"));
  const $tabArray = Array.from(document.querySelectorAll(".js-tab"));

  const createKeyboardNavigation = (e) => {
    const $thisTabList = e;
    // const $thisTabList = e.target.parentNode.parentNode.querySelector(".js-tabList");
    // console.log($thisTabList);
    const $thisTabArray = Array.from($thisTabList.querySelectorAll(".js-tab"));
    const $firstTab = $thisTabArray[0];
    const $lastTab = $thisTabArray[$thisTabArray.length - 1];
    // const $selectedTab = $thisTabList.querySelector('[aria-selected="true"]');
    // const $selectedTabId = $selectedTab.getAttribute("id");
    // console.log($selectedTabId);

    $thisTabArray.forEach((tab) => {

      tab.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          if (element == $firstTab) {
            $lastTab.focus();
          } else {
            const focusableElement = $thisTabArray.indexOf(element) - 1;
            $thisTabArray[focusableElement].focus();
          }
        } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          if (element == $lastTab) {
            $firstTab.focus();
          } else {
            const focusableElement = $thisTabArray.indexOf(element) + 1;
            $thisTabArray[focusableElement].focus();
          }
        } else if (e.key === "Home") {
          e.preventDefault();
          $firstTab.focus()
        } else if (e.key === "End") {
          e.preventDefault();
          $lastTab.focus()
        }
      });

    });
};

  // Add a click event handler to each tab
  $tabArray.forEach((tab) => {
    tab.addEventListener("click", changeTabs(tab));
  });

  $tabListArray.forEach(($tabList) => {
    createKeyboardNavigation($tabList);
  });

  // // Enable arrow navigation between tabs in the tab list
  // let $tabFocus = 0;

  // $tabLists.addEventListener("keydown", (e) => {
  //   // Move right
  //   if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
  //     $tabs[$tabFocus].setAttribute("tabindex", -1);
  //     if (e.key === "ArrowRight") {
  //       $tabFocus++;
  //       // If we're at the end, go to the start
  //       if ($tabFocus >= $tabs.length) {
  //         $tabFocus = 0;
  //       }
  //       // Move left
  //     } else if (e.key === "ArrowLeft") {
  //       $tabFocus--;
  //       // If we're at the start, move to the end
  //       if ($tabFocus < 0) {
  //         $tabFocus = $tabs.length - 1;
  //       }
  //     }

  //     $tabs[$tabFocus].setAttribute("tabindex", 0);
  //     $tabs[$tabFocus].focus();
  //   }
  // });
};





// function changeTabs(e) {
//   const $thisTab = e.target;
//   const $thisTabList = $thisTab.parentNode;
//   const $thisPanelId = $thisTab.getAttribute("aria-controls");
//   const $thisPanelWrap = document.getElementById(`${$thisPanelId}`).parentNode;
//   const $panels = $thisPanelWrap.querySelectorAll('[role="tabpanel"]');
//   const $thisPanel = document.getElementById(`${$thisPanelId}`);
//   // console.log($thisPanel);
//   e.preventDefault();
//   // Remove all current selected tabs
//   $thisTabList
//     .querySelectorAll('[aria-selected="true"]')
//     .forEach((t) => t.setAttribute("aria-selected", false));

//   // Set this tab as selected
//   $thisTab.setAttribute("aria-selected", true);
//   // console.log($thisTab);

//   // Hide all tab panels
//   $panels.forEach((p) => p.setAttribute("hidden", true));

//   // Show the selected panel
//   $thisPanel.removeAttribute("hidden");
// };

// function tabArrowNav(e) {
//   // const $tabLists = document.querySelector('[role="tablist"]');
//   // const $tabs = document.querySelectorAll('[role="tab"]');
//   const $thisTabList = e.target;
//   const $thisTabs = $thisTabList.querySelectorAll(".js-tab");
//   const $thisTabArray = Array.from($thisTabs);
//   console.log($thisTabs.length);
//   console.log($thisTabArray.length);
//   console.log($thisTabArray);

//   // Add a click event handler to each tab
//   $thisTabArray.forEach((tab) => {
//     tab.addEventListener("click", changeTabs);
//   });

//   // Enable arrow navigation between tabs in the tab list
//   let $tabFocus = 0;

//   $thisTabList.addEventListener("keydown", (e) => {
//     // Move right
//     if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
//       $thisTabs[$tabFocus].setAttribute("tabindex", -1);
//       if (e.key === "ArrowRight") {
//         $tabFocus++;
//         // If we're at the end, go to the start
//         if ($tabFocus >= $thisTabs.length) {
//           $tabFocus = 0;
//         }
//         // Move left
//       } else if (e.key === "ArrowLeft") {
//         $tabFocus--;
//         // If we're at the start, move to the end
//         if ($tabFocus < 0) {
//           $tabFocus = $thisTabs.length - 1;
//         }
//       }

//       $thisTabs[$tabFocus].setAttribute("tabindex", 0);
//       $thisTabs[$tabFocus].focus();
//     }
//   });
// };


// function findTabLists() {
//   const $tabListArray = Array.from(document.querySelectorAll(".js-tabList"));

//   // Add a click event handler to each tabList
//   $tabListArray.forEach(($tabList) => {
//     $tabList.addEventListener("click", tabArrowNav);
//   });
// };

// document.addEventListener("DOMContentLoaded", () => {
//   findTabLists();
// });












// function changeTabs(e) {
//   const $thisTab = e.target;
//   const $thisTabList = $thisTab.parentNode;
//   const $thisPanelId = $thisTab.getAttribute("aria-controls");
//   const $thisPanelWrap = document.getElementById(`${$thisPanelId}`).parentNode;
//   const $panels = $thisPanelWrap.querySelectorAll('[role="tabpanel"]');
//   const $thisPanel = document.getElementById(`${$thisPanelId}`);
//   // console.log($thisPanel);
//   e.preventDefault();
//   // Remove all current selected tabs
//   $thisTabList
//     .querySelectorAll('[aria-selected="true"]')
//     .forEach((t) => t.setAttribute("aria-selected", false));

//   // Set this tab as selected
//   $thisTab.setAttribute("aria-selected", true);
//   // console.log($thisTab);

//   // Hide all tab panels
//   $panels.forEach((p) => p.setAttribute("hidden", true));

//   // Show the selected panel
//   $thisPanel.removeAttribute("hidden");
// };


// function findTabLists() {
//   const $tabLists = document.querySelector('[role="tablist"]');
//   const $tabs = document.querySelectorAll('[role="tab"]');

//   // Add a click event handler to each tab
//   $tabs.forEach((tab) => {
//     tab.addEventListener("click", changeTabs);
//   });

//   // Enable arrow navigation between tabs in the tab list
//   let $tabFocus = 0;

//   $tabLists.addEventListener("keydown", (e) => {
//     // Move right
//     if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
//       $tabs[$tabFocus].setAttribute("tabindex", -1);
//       if (e.key === "ArrowRight") {
//         $tabFocus++;
//         // If we're at the end, go to the start
//         if ($tabFocus >= $tabs.length) {
//           $tabFocus = 0;
//         }
//         // Move left
//       } else if (e.key === "ArrowLeft") {
//         $tabFocus--;
//         // If we're at the start, move to the end
//         if ($tabFocus < 0) {
//           $tabFocus = $tabs.length - 1;
//         }
//       }

//       $tabs[$tabFocus].setAttribute("tabindex", 0);
//       $tabs[$tabFocus].focus();
//     }
//   });
// };

// document.addEventListener("DOMContentLoaded", () => {
//   findTabLists();
// });