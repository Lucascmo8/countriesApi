import { countries } from "./conectApi.js"
import { shownCardsWithCountries } from "./showCards.js"
let SelectAboutRegion = document.querySelector("#SelectAboutRegion")

SelectAboutRegion.addEventListener("change",filterRegion)


let regionSelected = ["all"]
function filterRegion(){
    if(regionSelected[0] !== SelectAboutRegion.value){
        regionSelected.shift()
        regionSelected.push(SelectAboutRegion.value)
        showByRegion(regionSelected.join())
    }
}


function showByRegion(region){
    if(region == "all"){
        shownCardsWithCountries(countries)
    }else{
        let filtedCountries = countries.filter(country => country.region == region)
        shownCardsWithCountries(filtedCountries)
    }
}
