/* ========================================== */
/* Spotlight cursor effect */
/* ========================================== */

const spotlightCursor = ({ x, y }) => {
  document.documentElement.style.setProperty('--x', Math.round(x));
  document.documentElement.style.setProperty('--y', Math.round(y));
};

function containsSpotlightBin(e) {
  const $thisSpotlightBin = e.target;

  if ($thisSpotlightBin.contains(e.target)) {
    $thisSpotlightBin.addEventListener("mousemove", spotlightCursor);
  } else {
    $thisSpotlightBin.removeEventListener("mousemove", spotlightCursor);
  }
};

function findSpotlights() {
  let $spotlightBinArray = Array.from(document.querySelectorAll(".js-spotlightBin"));

  $spotlightBinArray.forEach((spot) => {
    spot.addEventListener("mousemove", containsSpotlightBin);
  });
};

/* findSpotlights() is called in loadContent.js */