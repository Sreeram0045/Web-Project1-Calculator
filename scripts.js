"use strict";

let inputScreen = document.querySelector("#inputScreen");
let calc = document.querySelectorAll(".calc");

// add event listener to 
// all the buttons 
// whenever the buttons are clicked
// it's inner value gets added to inputScreen
calc.forEach((container)=> {
    container.addEventListener("click", (e)=> {
        let text = e.target.textContent;
        inputScreen.value += text; 
    })
})

// TODO: 1. add values when operators clicked
//       2.implement eval function
//       