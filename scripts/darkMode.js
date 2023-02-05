let body = document.body
let header = document.getElementById("headerMenu")
let main = document.getElementById("main")
let btnDarkAndLightMode = document.getElementById("btnDarkAndLightMode")
let countriesSection = document.getElementById("countriesSection")
let articleDetails = document.getElementById("articleDetails")

const elements=[body,header,main,countriesSection,articleDetails]

btnDarkAndLightMode.addEventListener("click",switchColor)

let darkModeOn = false
function switchColor(){
    elements.forEach(element => element.classList.toggle("darkMode"))

    if(darkModeOn == false){
        btnDarkAndLightMode.innerHTML = `<span></span>Light Mode`
        darkModeOn = true
    }else{
        btnDarkAndLightMode.innerHTML = `<span></span>Dark Mode`
        darkModeOn = false
    }

}

export {main,articleDetails}