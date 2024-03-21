import {nameUI,regNoUI,outputDisplay,deleteButton } from "./script.js";

class Info{
  constructor(name,reg){
    this.name = name;
    this.reg = reg;
  }
}



function listOut(e){
    e.preventDefault();

    deleteButton.style.display = "block";
   let name = nameUI.value, reg = regNoUI.value;
   let userInfo = new Info(name , reg);

   outputDisplay.style.cssText = " border: 1px solid black;"

//   console.log(userInfo.name , userInfo.reg)
// let output = document.createElement("DIV");
//   output.innerHTML= `
//  <div>Name: ${userInfo.name}</div>
//  <div>Reg: ${userInfo.reg}</div>
// `;

let output;

output= `
<div>Name: ${userInfo.name}</div>
<div>Reg: ${userInfo.reg}</div>
`
outputDisplay.innerHTML = output;

nameUI.value = null;
regNoUI.value = null ;

// store in LS

 storeLs(userInfo.name, userInfo.reg);


}

// store in local storage
function storeLs(nym ,ryg){
  let UserName = localStorage.setItem("name" ,nym);
  let UserReg = localStorage.setItem("Reg" , ryg )

} 

// get items form LS

function getItems(){
     let userName = localStorage.getItem("name");
     let UserReg  = localStorage.getItem("Reg");
     
     if(userName === null && UserReg === null){
      outputDisplay.style.display = "none";
      deleteButton.style.display = "none";
     }

     let output;

     output= `
     <div>Name: ${userName}</div>
     <div>Reg: ${UserReg}</div>
     `
     outputDisplay.innerHTML = output;

    
    outputDisplay.style.border= "1px solid black"
}

// clear
function del(){
localStorage.clear();
deleteButton.style.display = "none";
outputDisplay.style.border = "none";
outputDisplay.innerHTML = null;
}




export {listOut , getItems, del};