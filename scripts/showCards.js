import { showMore } from "./moreDetail.js";
let countriesSection = document.getElementById("countriesSection")
let testando = []
async function shownCardsWithCountries(countries){
    countriesSection.innerHTML = ``
    await countries.map(country => countriesSection.innerHTML += `
    <div class="countryCard">
        <div class="CountryImg" id="${country.name}Flag">
            <img src="${country.flag}" alt="${country.name} flag" id="${country.name}Flag">
        </div>
        <div class="countryText\">    
            <h2>${country.name}</h2>
            <p><strong>Population:</strong> ${country.population}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <button class="teste" data-botao="${country.name}">See more Details</button>
        </div>
    </div>`);
    // alerta()

    testando = document.querySelectorAll("[data-botao]");
    await testando.forEach(botao => botao.addEventListener("click",function(){
        showMore(botao.dataset.botao)
    }))
};

// function showMore(pais){
//     countriesSection.innerHTML= `${pais}`
// }

export {shownCardsWithCountries,countriesSection}