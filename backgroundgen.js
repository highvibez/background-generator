var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


// color1.addEventListener("input", function(){
//     body.style.background =
//     "linear-gradient(to right, " 
//     + color1.value 
//     +", " 
//     + color2.value
//      + ")";
// })

// color2.addEventListener("input", function(){
//     body.style.background =
//     "linear-gradient(to right, " 
//     + color1.value 
//     +", " 
//     + color2.value
//      + ")";
// })
// // this repeats itself. You need to create a function so you're not repeating the same code

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
    // this adds text content and tells you what colors are being used
} 

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
