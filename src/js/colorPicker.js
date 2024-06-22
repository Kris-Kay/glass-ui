/* ========================================== */
/* HSL Color Picker */
/* ========================================== */
function initColorPicker() {

  console.clear();

  var picker = {
    container: document.getElementById("picker"),
    sample: document.getElementById("sample"),
    colorTest: document.getElementById("colorTest")
  };

  var colors = {
    h: 90,
    s: 80,
    l: 50,
    a: 0.7,

    textColor: function() {
      return this.l > 42 ?
        "black" :
        "white";
    },

    hueValue: function() {
      return Math.floor(this.h);
    },

    satValue: function() {
      return Math.floor(this.s) + "%";
    },

    lumValue: function() {
      return Math.floor(this.l) + "%";
    },

    alphaValue: function() {
      return this.a;
    },

    getHSLString: function() {
      return "hsl( " + [
        colors.hueValue(),
        colors.satValue(),
        colors.lumValue()
      ].join(" ")
        + " / " +
        colors.alphaValue()
        + " )";
    },

    getHueSatString: function() {
      return "hsl( " +
        colors.hueValue()
        + " " +
        colors.satValue()
        + " 50% )";
    },

    getHueLumString: function() {
      return "hsl( " +
        colors.hueValue()
        + " 100% " +
        colors.lumValue()
        + " )";
    },

    getHueAlphaString: function() {
      return "hsl( " + [
        colors.hueValue(),
        colors.satValue(),
        colors.lumValue()
      ].join(" ")
        + " / 1 )";
    }
  };

  picker.sliders = Array.from(
    picker.container.querySelectorAll('input[name="colorSlider"]')
  );

  picker.sliders.forEach(function($slider) {
    $slider.addEventListener("input", handleSliderChange);
    initSlider($slider);
  });

  function handleSliderChange() {
    var sliderType = this.id.split("hsl-")[1];

    if(sliderType === "h") {
      colors.h = this.value;

    } else if(sliderType === "s") {
      colors.s = this.value;

    } else if(sliderType === "l") {
      colors.l = this.value;

    } else if(sliderType === "a") {
      colors.a = this.value;
    }
    updateColors();
  }

  function updateColors() {
    picker.sliders.forEach(updateColor);
  }

  function updateColor() {
    picker.sliders[0].style.color = colors.getHSLString();
    picker.sliders[1].style.color = colors.getHueLumString();
    picker.sliders[2].style.color = colors.getHueSatString();
    picker.sliders[3].style.color = colors.getHueAlphaString();
    picker.sample.style.backgroundColor = colors.getHSLString();
    picker.colorTest.style.backgroundColor = colors.getHSLString();
    picker.sample.innerHTML = getColorValuesHTML();
  }

  function getColorValuesHTML() {
    return [
      "<div class=\"" + colors.textColor() + "\">",
      [
        colors.getHSLString(),
        window.getComputedStyle(picker.sliders[0]).color
      ].join("</div><div class=\"" + colors.textColor() + "\">"),
      "</div>"
    ].join("");
  }

  function initSlider($slider) {
    if($slider.id==="hsl-h") {
      $slider.value = colors.h;

    } else if($slider.id ==="hsl-s") {
      $slider.value = colors.s;

    } else if($slider.id ==="hsl-l") {
      $slider.value = colors.l;

    } else if($slider.id ==="hsl-a") {
      $slider.value = colors.a;
    }
    updateColors();
  }
}



/* ========================================== */

  // function fixChromeRepaintIssue(event) {
  //   var updateable = picker.sliders;
  //   if(event.type !== "mouseup") {
  //     updateable = picker.sliders.filter(function(el) {
  //       return el !== event.target;
  //     });
  //   }
  //   updateable.forEach(forceRepaint)
  // }

  // function forceRepaint(element) {
  //   element.style.display='none';
  //   element.offsetHeight;
  //   element.style.display='';
  // }

  // picker.sliders.addEventListener("mouseup", fixChromeRepaintIssue, false);