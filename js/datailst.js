import countries from "./date.js";

let detels = document.querySelector(".details");

let arr = window.location.search.split("=");
let id = Number(arr[arr.length - 1]);

let findArr = countries.find((item) => item.id === id);

console.log(findArr);

detels.innerHTML = `
  <img src="${findArr.flag}" alt="${findArr.name}" />
  <h2>${findArr.name}</h2>

  <p><strong>Population :</strong> ${findArr.population}</p>
  <p><strong>Region :</strong> ${findArr.region}</p>
  <p><strong>Capital :</strong> ${findArr.capital}</p>
  <p><strong>Languages :</strong> ${findArr.languages.join(", ")}</p>
  <p><strong>Borders :</strong> ${
    findArr.borders?.length ? findArr.borders.join(", ") : "No borders"
  }</p>
`;
