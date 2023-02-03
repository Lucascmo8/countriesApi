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
        found = countries.filter(element => element.translations.br == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
    if(found.length == 0){
        found = countries.filter(element => element.translations.de == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.es == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.fa == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.fr == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.hr == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.hu == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.it == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.ja == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.nl == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
     if(found.length == 0){
        found = countries.filter(element => element.translations.pt == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
     if(found.length == 0){
        found = countries.filter(element => element.nativeName == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
    if(found.length == 0){
        found = countries.filter(element => element.name == inputSearchCountry.value.trim())
        shownCardsWithCountries(found)
    }
    if(found.length == 0){
        countryNoFound()
    }
}

function countryNoFound(){
    countriesSection.innerHTML = `
    <h3>Country not found, Please enter a valid country name or use capital letters at the beginning of each name.</h3>`
}