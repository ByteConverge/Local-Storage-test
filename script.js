import {listOut ,getItems , del } from "./code.js";
let value;
let inputUI = document.querySelector("form"),
nameUI = inputUI.children[2],
regNoUI=inputUI.children[6],
outputDisplay = document.querySelector(".outputSection"),
deleteButton = document.querySelector(".clear")
;

// value = outputDisplay;
// console.log(value)


(function loadEventListeners() {
    inputUI.addEventListener("submit" , listOut);
    document.addEventListener("DOMContentLoaded" , getItems);
    deleteButton.addEventListener("click" , del)

    
})();



export {inputUI,nameUI,regNoUI,outputDisplay , deleteButton}
