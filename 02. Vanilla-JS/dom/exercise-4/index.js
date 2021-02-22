const fetch = require("node-fetch");

fetch("https://pokeapi.co/api/v2/pokemon")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    for (const pokemon of res.results) {
      console.log(pokemon.name);
    }
  });
