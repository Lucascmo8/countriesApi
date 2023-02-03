import { countries } from "./conectApi.js";
import { shownCardsWithCountries } from "./showCards.js";
import { countriesSection } from "./showCards.js";

let inputSearchCountry = document.getElementById("inputSearchCountry")
let btnSearch = document.getElementById("btnSearch")

inputSearchCountry.addEventListener("keydown",searchWithText)
btnSearch.addEventListener("click",filterWithText)

function searchWithText(event){
    if(event.key == "Enter"){
        filterWithText()
    }
}

function filterWithText(){
    let found = []
    if(found.length == 0){
        found = countries.filter(element => element.translations.br == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`1`)
    }
    if(found.length == 0){
        found = countries.filter(element => element.translations.de == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`2`)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.es == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`3`)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.fa == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`4`)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.fr == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`5`)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.hr == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`6`)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.hu == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`7`)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.it == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`8`)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.ja == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`9`)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.nl == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`10`)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.pt == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`11`)
    }
     if(found.length == 0){
        found = countries.filter(element => element.nativeName == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`12`)
    }
    if(found.length == 0){
        found = countries.filter(element => element.name == inputSearchCountry.value)
        shownCardsWithCountries(found)
        console.log(found)
        console.log(`13`)
    }
    if(found.length == 0){
        countryNoFound()
    }
}

function countryNoFound(){
    countriesSection.innerHTML = `
    <h3>Country not found, Please enter a valid country name or use capital letters at the beginning of each name.</h3>`
}