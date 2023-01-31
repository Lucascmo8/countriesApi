let body = document.body
let header = document.getElementById("headerMenu")
let main = document.getElementById("main")
let btnDarkAndLightMode = document.getElementById("btnDarkAndLightMode")

const elements=[body,header,main]

btnDarkAndLightMode.addEventListener("click",switchColor)

function switchColor(){
    elements.forEach(element => element.classList.toggle("darkMode"))
}