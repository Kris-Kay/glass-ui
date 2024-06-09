
// inputs
let blurInput = document.querySelector('#blurValueGlass');
let opacityGlass = document.querySelector('#opacityGlass');
let saturation = document.querySelector('#saturation');
let outlineInput = document.querySelector('#outlineInput');

let CardcolorGlass = document.querySelector('#CardcolorGlass');

let blurInputNumber = document.querySelector('#blurValueGlassNumber');
let opacityGlassNumber = document.querySelector('#opacityGlassNumber');
let saturationNumber = document.querySelector('#saturationNumber');
let outlineNumber = document.querySelector('#outlineNumber')

let resultGlassCode = document.querySelector('#resultGlassCode')

document.querySelector('#copyCodeGlass').addEventListener('click',()=>{
    navigator.clipboard.writeText(resultGlassCode.textContent);
    let proof = document.querySelector('#copyConfirmation');
    proof.classList.add('animationcopy'); setTimeout(function () {
        proof.classList.remove('animationcopy')
    }, 1000)
})



// blur
blurInput.addEventListener('input',()=>{
    inputs.forEach(input => {
        input.style.setProperty('--blur', blurInput.value + 'px');
    });
    blurInputNumber.innerText = blurInput.value;
    document.querySelector('#blurResult').innerText = blurInput.value + "px";
    document.querySelector('#blurResult2').innerText = blurInput.value + "px";

});

// outline
outlineInput.addEventListener('input',()=>{
    inputs.forEach(input => {
        console.log('EEE')
        input.style.setProperty('--outline', outlineInput.value +"px");
    });
    outlineNumber.innerText = outlineInput.value;
    document.querySelector('#outlineResult').innerText = outlineInput.value+"px";

});

//opacity
opacityGlass.addEventListener('input',()=>{
    inputs.forEach(input => {
        input.style.setProperty('--opacity', opacityGlass.value);
    });
    console.log('eeee')
    opacityGlassNumber.innerText = opacityGlass.value
});

//saturation
saturation.addEventListener('input',()=>{
    inputs.forEach(input => {
        input.style.setProperty('--saturation', saturation.value+'%');
        input.style.setProperty('--saturation2', saturation.value+'%');
    });
    saturationNumber.innerText = saturation.value;
    document.querySelector('#saturationResult').innerText = saturation.value + "%";
    document.querySelector('#saturationResult2').innerText = saturation.value + "%";



});

// function to convert color code
function hexToRgb(hex) {
    // Remove the "#" symbol if it exists
    hex = hex.replace("#", "");

    // Convert the hex value to decimal
    const r = parseInt(hex.substring(0,2), 16);
    const g = parseInt(hex.substring(2,4), 16);
    const b = parseInt(hex.substring(4,6), 16);
    console.log(`RGB color: (${r}, ${g}, ${b})`);
    // Return the RGB values as an object

    inputs.forEach(input => {
        input.style.setProperty('--red',r);
        document.querySelector('#red').innerText = r;
        input.style.setProperty('--green',g);
        document.querySelector('#green').innerText = g;
        input.style.setProperty('--blue',b);
        document.querySelector('#blue').innerText = b;
    });


  }

// card color
CardcolorGlass.addEventListener('input',()=>{
        hexToRgb(CardcolorGlass.value)

});


let backgroundColor = document.querySelector(".background-color")
let colorStartInput = document.querySelector('#colorStartInput');
let colorIntensityStartInput = document.querySelector('#colorIntensityStartInput');
let colorEndInput = document.querySelector('#colorEndInput');
let intensityBGEndGradient = document.querySelector('#intensityBGEndGradient');
let gradientDirection = document.querySelector('#gradientDirection');
let bgSolidColor = document.querySelector('#bgSolidColor');


let solidBG_input = document.querySelector('#solidBG_input');
let gradientBackgroundInput = document.querySelector('#gradientBackgroundInput');

solidBG_input.addEventListener('click',()=>{
    if(solidBG_input.checked){
        backgroundColor.style.background = bgSolidColor.value;
        document.querySelector('.inputSolidBg').classList.add('appear');
        document.querySelector('.gradientContainer').classList.remove('appear');
        gradientBackgroundInput.checked = false;

    }else{
        backgroundColor.removeAttribute("style");
        document.querySelector('.inputSolidBg').classList.remove('appear');
        document.querySelector('.gradientContainer').classList.add('appear');
        gradientBackgroundInput.checked = true;
    }
});

gradientBackgroundInput.addEventListener('click',()=>{
    if(gradientBackgroundInput.checked){
        backgroundColor.removeAttribute("style");
        document.querySelector('.inputSolidBg').classList.remove('appear');
        document.querySelector('.gradientContainer').classList.add('appear');
        solidBG_input.checked = false;
    }else{
        backgroundColor.style.background = bgSolidColor.value;
        document.querySelector('.inputSolidBg').classList.add('appear');
        document.querySelector('.gradientContainer').classList.remove('appear');
        solidBG_input.checked = true;
    }

})


colorStartInput.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGcolorStart', colorStartInput.value);
})

colorIntensityStartInput.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGcolorStartIntensity', colorIntensityStartInput.value+"%");
})

colorEndInput.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGcolorEnd', colorEndInput.value);
})

intensityBGEndGradient.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGcolorEndIntensity', intensityBGEndGradient.value+"%");
})

gradientDirection.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGdirection', gradientDirection.value+"deg");
})

bgSolidColor.addEventListener('input',()=>{
    backgroundColor.style.setProperty('--BGsolidColor', bgSolidColor.value);
    backgroundColor.style.background = bgSolidColor.value;
})


let borderRadiusGlass = document.querySelector('#borderRadiusGlass');

borderRadiusGlass.addEventListener('input',()=>{
    console.log('ffff')
    inputs.forEach(input => {
        input.style.setProperty('--borderRadiusValue', borderRadiusGlass.value+"px");
    });
    document.querySelector('#borderRadiusResults').innerText = borderRadiusGlass.value+"px";
})