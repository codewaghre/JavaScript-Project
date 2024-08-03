
//Hex Color Generator querySelctor
const hexBtn = document.querySelector('.hex-btn')
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".hex-copy-color");

// Hex colour setter
hexBtn.addEventListener('click', () => {
    // console.log("hello");
     let characterSet = "0123456789ABCDEF";
     let hexColorOutput = "";

    for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
        hexColorOutput += characterSet.charAt(
            Math.floor(Math.random() * charSetLength));
    }
    // console.log(hexColorOutput);

    hexColorValue.innerHTML = `#${hexColorOutput}`
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`

    //  button color chnage 
    // hexBtn.style.backgroundColor = `#${hexColorOutput}` 
    
})


// Copy Hex Color 
hexCopyBtn.addEventListener('click', ()=> {
    navigator.clipboard.writeText(hexColorValue.textContent)
    alert("Copied")
})


//RGB Color Generator

const rgbBtn = document.querySelector('.rgb-btn')
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbColorValue = document.querySelector(".rgb-color-value");
const rgbColorCopy = document.querySelector(".rgb-copy-color");


rgbBtn.addEventListener('click', () => {
    let extracrRedValue = getRedInputRange.value 
    let extracrGreenValue = getGreenInputRange.value
    let extractblueValue = getBlueInputRange.value


    rgbColorContainer.style.backgroundColor = `rgb(${extracrRedValue}, ${extracrGreenValue}, ${extractblueValue})`
    rgbColorValue.textContent = `rgb(${extracrRedValue}, ${extracrGreenValue}, ${extractblueValue})`
})


// Ggb colour copy

rgbColorCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(rgbColorContainer.textContent)
    alert("Copied")
})
