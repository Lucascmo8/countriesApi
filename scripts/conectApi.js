let lugarCerto = document.getElementById("countriesSection")

let contries = []
const urlApi = 'https://restcountries.com/v2/all'

teste()

async function teste(){
    const res = await fetch(urlApi)
    contries = await res.json()
    console.log(contries)
    console.log(contries.length)
    contries.forEach(country => lugarCerto.innerHTML += `
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

