//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log();

fetch("https://api.agify.io?name=Tofol")
  .then((res) => res.json())
  .then((res) => console.log(res));

//Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.
const baseUrl = "https://api.nationalize.io";

const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");

function searchAndPrint(i, countryRes) {
  fetch(
    `https://restcountries.eu/rest/v2/alpha?codes=${countryRes.country[i].country_id}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      const div$$ = document.createElement("div");
      div$$.style.display = "flex";
      div$$.style.margin = "20px 0";

      const button$$ = document.createElement("button");
      button$$.textContent = "X";
      button$$.addEventListener("click", () => {
        button$$.parentElement.remove();
      });
      div$$.appendChild(button$$);

      const text$$ = document.createElement("p");
      text$$.textContent = `The name ${input$$.value} has a ${Math.round(
        countryRes.country[i].probability * 100
      )}% possibility of being from ${res[0].name}.`;
      div$$.appendChild(text$$);

      document.body.appendChild(div$$);
    });
}

button$$.addEventListener("click", () => {
  fetch(`${baseUrl}?name=${input$$.value}`)
    .then((res) => res.json())
    .then((countryRes) => {
      for (let i = 0; i < countryRes.country.length; i++) {
        searchAndPrint(i, countryRes);
      }
    });
});
