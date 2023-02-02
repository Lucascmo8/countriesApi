import { countries } from "./conectApi.js";
import { shownCardsWithCountries } from "./showCards.js";

let inputSearchCountry = document.getElementById("inputSearchCountry")
let btnSearch = document.getElementById("btnSearch")

inputSearchCountry.addEventListener("keydown",searchWithText)
btnSearch.addEventListener("click",searchWithText)



function searchWithText(event){
    let found = countries.filter(element => element.name == inputSearchCountry.value);
    if(event.key == "Enter"){
        console.log(found)
        shownCardsWithCountries(found)
    }
}