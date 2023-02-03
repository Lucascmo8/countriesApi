import { shownCardsWithCountries } from "./showCards.js"


let countries = []
const urlApi = 'https://restcountries.com/v2/all'


conectApi(urlApi)

async function conectApi(url){
    const res = await fetch(url)
    countries = await res.json()
    shownCardsWithCountries(countries)
}

export {countries,conectApi}