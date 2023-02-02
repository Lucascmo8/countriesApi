let countriesSection = document.getElementById("countriesSection")
function shownCardsWithCountries(countries){
    countriesSection.innerHTML = ``
    countries.forEach(country => countriesSection.innerHTML += `
    <div class="countryCard">
        <div class="CountryImg" id="${country.name}Flag">
            <img src="${country.flag}" alt="${country.name} flag" id="${country.name}Flag">
        </div>
        <div class="countryText\">    
            <h2>${country.name}</h2>
            <p><strong>Population:</strong> ${country.population}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
        </div>
    </,div>`);
}

export {shownCardsWithCountries}