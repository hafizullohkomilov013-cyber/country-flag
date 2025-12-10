import countries from "./date.js";

import { UpdateUi } from "./index.js"

let searchInput = document.querySelector("input")
let selectEl = document.getElementById("select")
let countriesEl = document.querySelector(".countries")

UpdateUi(countries)

function search (query) {
    let filter = query.trim().toLowerCase()
    return countries.filter((item => {        
        let region = item.region.toLowerCase().includes(filter)
        let name = item.name.toLowerCase().includes(filter)
        let capital = item.capital.toLowerCase().includes(filter)
        return region || name || capital
    }))
    
}

searchInput.addEventListener("input" , (e) => {
    let searchCountr = e.target.value
    let res  = search(searchCountr)
    UpdateUi(res)
    
})

function find (a) {
    return countries.filter(item => {
        return item.region.includes(a)
    })
}

selectEl.addEventListener('change', (e) => {
    let select = e.target.value
    let res = find(select)
    UpdateUi(res)
})

countriesEl.addEventListener("click" ,(e) => {
    let il = e.target.value

    window.location.href += '/detailst.html'
})

console.log(window.location,href);

