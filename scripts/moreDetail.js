import { main } from "./darkMode.js"
import { countries } from "./conectApi.js"
import { articleDetails } from "./darkMode.js"

// let articleDetails = document.getElementById("articleDetails")

function showMore(pais){
    main.style.display = "none"
    let details = countries.filter(country => country.name == pais)
    let detailsBorder = details[0].borders
    if(detailsBorder == undefined){
        detailsBorder = `None`
    }else{
        detailsBorder = details[0].borders.join(",")
    }
    console.log(details)
    articleDetails.innerHTML = `
    <div>
            <button>Back</button>
        </div>
        <div id="content">
            <div id="imagem">
                <img src="${details[0].flag}" alt="${details[0].name} flag" id="flagDetails">
            </div>
            <div id="allContent">
                <div id="firstContent">
                    <h4>${details[0].name}</h4>
                    <p><strong>Native Name: </strong>${details[0].nativeName}</p>
                    <p><strong>Population: </strong>${details[0].population}</p>
                    <p><strong>Region: </strong>${details[0].region}</p>
                    <p><strong>Sub Region: </strong>${details[0].subregion}</p>
                    <p><strong>Capital: </strong>${details[0].capital}</p>
                </div>
                <div id="secondContent">
                    <p><strong>Alpha Code: </strong>${details[0].alpha3Code}</p>
                    <p><strong>Currencies: </strong>${details[0].currencies[0].name}</p>
                    <p><strong>Languages: </strong>${details[0].languages[0].name}</p>
                </div>
                <div id="borderCountries">
                    <p><strong>Border Countries: </strong>${detailsBorder}</p>
                </div>
            </div>
        </div>
    `
}

export {showMore,articleDetails}