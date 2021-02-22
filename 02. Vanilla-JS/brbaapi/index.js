/*En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

Si te fijas en la respuesta de la api, la imagen está en la propiedad .img y el título en la propiedad .name.*/

const main$$ = document.querySelector("main");

fetch("https://breakingbadapi.com/api/characters")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    for (let i = 0; i < res.length; i++) {
      const char = res[i];
      const charDiv$$ = document.createElement("div");
      charDiv$$.classList.add("charDiv");

      const img$$ = document.createElement("img");
      img$$.src = char.img;
      charDiv$$.appendChild(img$$);

      const textDiv$$ = document.createElement("div");
      textDiv$$.classList.add("textDiv");

      const h2$$ = document.createElement("h2");
      h2$$.textContent = char.name;
      textDiv$$.appendChild(h2$$);

      charDiv$$.appendChild(textDiv$$);

      main$$.appendChild(charDiv$$);
    }
  });
