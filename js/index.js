import countries from "./date.js";

let CountriesEl = document.querySelector(".countries");

export function UpdateUi(date) {
   CountriesEl.innerHTML = ''
  date.forEach((item) => {
    return CountriesEl.innerHTML += `
        <li class="country" data-id="${item.id}">
          <img src="${item.flag}" alt="" />
          <div class="country__intro">
            <h4 class="name">${item.name}</h4>
            <p>Population: <span>${item.population} </span></p>
            <p>Region: <span class="region">${item.region} </span></p>
            <p>Capital: <span>${item.capital}</span></p>
          </div>
        </li>
    `;
  });
}



CountriesEl.addEventListener('click', (e) => {
  
  let li = e.target.closest('.country')
  let id = li.dataset.id
  console.log(id);
  
  
  window.location.href = `/detailst.html?id=${id}`;
  
})


