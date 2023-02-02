let body = document.body
let header = document.getElementById("headerMenu")
let main = document.getElementById("main")
let btnDarkAndLightMode = document.getElementById("btnDarkAndLightMode")
let countriesSection = document.getElementById("countriesSection")

const elements=[body,header,main,countriesSection]

btnDarkAndLightMode.addEventListener("click",switchColor)

function switchColor(){
    elements.forEach(element => element.classList.toggle("darkMode"))
}