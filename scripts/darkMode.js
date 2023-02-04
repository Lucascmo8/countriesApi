let body = document.body
let header = document.getElementById("headerMenu")
let main = document.getElementById("main")
let btnDarkAndLightMode = document.getElementById("btnDarkAndLightMode")
let countriesSection = document.getElementById("countriesSection")
let articleDetails = document.getElementById("articleDetails")

const elements=[body,header,main,countriesSection,articleDetails]

btnDarkAndLightMode.addEventListener("click",switchColor)

function switchColor(){
    elements.forEach(element => element.classList.toggle("darkMode"))
}

export {main,articleDetails}