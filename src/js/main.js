/* ================================== */
/* JS */
/* ================================== */

// Open & Close nav dropdown menu
/* ================================== */
const $ham = document.getElementById("js-navHam");
const $x = document.getElementById("js-navX");
const $dropdown = document.getElementById("js-navDropdown");
const $allItems = $dropdown.querySelectorAll(".dropdown-item");
const itemsArray = Array.from($allItems);

document.getElementById("js-dropdownToggle").onclick = () => {
  $ham.classList.toggle("isClosed");
  $x.classList.toggle("isClosed");
  $dropdown.classList.toggle("isClosed");
};

// close dropdown when an item is clicked
itemsArray.forEach((item) => {
  item.onclick = () => {
    $ham.classList.add("isClosed");
    $x.classList.add("isClosed");
    $dropdown.classList.add("isClosed");
  };
});


// Tab menu for switching between backgrounds
/* ================================== */
const $tabMenu = document.getElementById("js-tabMenu");
const $bg = document.getElementById("js-bg");
const $color = document.getElementById("color-tab");
let   $prevTab = $color;

buttonPressed = (e) => {
  if (e.target.nodeName === "BUTTON") {
    if ($prevTab !== e.target) {
      $prevTab.classList.remove("tab-active");
    }
    $prevTab = e.target;
    // console.log($prevTab);
    e.target.classList.add("tab-active");

    if (e.target.id === "dark-tab") {
      $bg.classList.add("dark");

      if ($prevTab !== null) {
        if ($bg.classList.contains("light")) {
          $bg.classList.remove("light");
        } else if ($bg.classList.contains("color")) {
          $bg.classList.remove("color");
        }
      }
    }

    if (e.target.id === "light-tab") {
      $bg.classList.add("light");

      if ($prevTab !== null) {
        if ($bg.classList.contains("dark")) {
          $bg.classList.remove("dark");
        } else if ($bg.classList.contains("color")) {
          $bg.classList.remove("color");
        }
      }
    }

    if (e.target.id === "color-tab") {
      $bg.classList.add("color");

      if ($prevTab !== null) {
        if ($bg.classList.contains("light")) {
          $bg.classList.remove("light");
        } else if ($bg.classList.contains("dark")) {
          $bg.classList.remove("dark");
        }
      }
    }
  }
};

$tabMenu.addEventListener("click", buttonPressed);





/* Accordion */
/* ================================== */
//uses classList, setAttribute, and querySelectorAll

// const accordionToggles = document.body.querySelectorAll(".js-accordionToggle");
// const toggleArray = Array.from(accordionToggles);
// console.log(toggleArray);

(function(){
	let accordionToggles = document.querySelectorAll('.js-accordionToggle'),
	// setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  };

	setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};

	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};

//function
switchAccordion = function(e) {
  
	e.preventDefault();

	var thisContent = e.target.parentNode.nextElementSibling;
	var thisAccordion = e.target.parentNode.parentNode;
  console.log(thisAccordion);
	var thisToggle = e.target;
	if(thisContent.classList.contains('is-closed')) {
		setAccordionAria(thisToggle, thisContent, 'true');
	} else {
		setAccordionAria(thisToggle, thisContent, 'false');
	}
  	thisToggle.classList.toggle('is-closed');
  	thisToggle.classList.toggle('is-open');
		thisContent.classList.toggle('is-closed');
		thisContent.classList.toggle('is-open');
    thisAccordion.classList.toggle('is-closed');
		thisAccordion.classList.toggle('is-open');
 	
  	// thisContent.classList.toggle('animateIn');
	};

	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();



/*  Card hover effect */
/* ================================== */
// const allCards = document.body.querySelectorAll(".card-hover-effect");
// const cardArray = Array.from(allCards);
// // console.log(cardArray);

// cardArray.forEach((card) => {
//   card.addEventListener("mousemove", (e) => {
//     // let b = event.offsetX;
//     // let x = b / 4;
//     let x = e.pageX - e.card.offsetLeft;

//     // console.log(x);
//     card.style.setProperty("--x", `${x}px`);
//   });
// });

// document.querySelector(".glass-morphism-container-hover-effect").onmousemove = (e) => {
//   const x = e.pageX - e.target.offsetLeft;
//   const y = e.pageY - e.target.offsetTop;
//   e.target.style.setProperty("--x", `${x}px`);
//   e.target.style.setProperty("--y", `${y}px`);
// };





// Dynamic border radius
/* ================================== */

// let timeout = false; // holder for timeout id
// let delay = 250; // delay after event is "complete" to run callback

// function calcRadius() {
//   const allRoundRect = document.body.querySelectorAll(".round-rect");
//   const roundRectArray = Array.from(allRoundRect);
//   console.log(roundRectArray);

//   roundRectArray.forEach((rect) => {
//     let w = rect.offsetWidth;
//     let scale = -0.7 * (0.0065 * (w - 500)) ** 3;
//     let s = 32 - scale;
//     let r;

//     if (s > 64) {
//       r = 64;
//     } else if (s < 16) {
//       r = 16;
//     } else {
//       r = s;
//     }

//     rect.style.setProperty("--radius", `${r}px`);
//   });

//   // const allInnerRect = document.body.querySelectorAll(".inner-rect");
//   // const innerRectArray = Array.from(allInnerRect);
//   // console.log(innerRectArray);

//   // innerRectArray.forEach(rect => {
//   //   let w = rect.offsetWidth;
//   //   let scale = (-0.7 * ((0.0065 * (w - 500)) ** 3));
//   //   let s = 20 - scale;
//   //   let r;

//   //   if (s > 48) {
//   //     r = 48;
//   //   } else if (s < 8) {
//   //     r = 8;
//   //   } else {
//   //     r = s;
//   //   }

//   //   rect.style.setProperty('--inRadius', `${ r }px`);
//   // });
// }

// // window.resize event listener
// window.addEventListener("resize", function (event) {
//   // clear the timeout
//   clearTimeout(timeout);
//   // start timing for event "completion"
//   timeout = setTimeout(calcRadius, delay);
// });

// calcRadius();