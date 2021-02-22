//Dado el siguiente array, devuelve una lista con sus nombres utilizando .map

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usuarios = users.map((user) => {
  return user.name;
});

console.log(...usuarios);

//Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const usuariosA = users.map((user) => {
  if (user.name.charAt(0) == "A") return "Anacleto";
  else return user.name;
});

console.log(...usuariosA);

//Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const updatedCities = cities.map((city) => {
  if (city.isVisited) return `${city.name} (Visitado)`;
  else return city.name;
});

console.log(...updatedCities);

//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ofAge = ages.filter((age) => {
  return age > 18;
});

console.log(...ofAge);

//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

const oddNumbers = ages.filter((age) => {
  return age % 2 == 0;
});

console.log(...oddNumbers);

//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que sean de League of legends.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const badPeople = streamers.filter((streamer) => {
  return streamer.gameMorePlayed == "League of Legends";
});

console.log(...badPeople);

//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of legends' y tengan menos de 30 años.

const youngStreamers = streamers.filter((streamer) => {
  return streamer.age < 30;
});

console.log(...youngStreamers);

//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name.

const uStreamers = streamers.filter((streamer) => {
  return streamer.name.includes("u");
});

console.log(...uStreamers);

//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const legendStreamers = streamers.filter((streamer) => {
  if (streamer.age > 35)
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
  return streamer.gameMorePlayed.includes("Legends");
});

console.log(...legendStreamers);

//Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

function handleChange(event) {
  const writtenStreamers = streamers.filter((streamer) => {
    return streamer.name
      .toLowerCase()
      .includes(event.target.value.toLowerCase());
  });
  console.log(...writtenStreamers);
}

const input$$ = document.querySelector("input");

input$$.addEventListener("input", handleChange);

//Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

const hundred = numbers.find((number) => {
  return number == 100;
});

console.log(hundred);

//Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const movie2010 = movies.find((movie) => {
  return movie.date == 2010;
});

console.log(movie2010);

//Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa spread operator para fusionarlos.

const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
  {
    mutationName: "Porompompero",
    description:
      "Hace que el alien pueda adquirir un la habilidad de tocar el tambor",
  },
  {
    mutationName: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    mutationName: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const ccsms = aliens.find((alien) => {
  return alien.name == "Cucushumushu";
});

const prmpp = mutations.find((mutation) => {
  return mutation.mutationName == "Porompompero";
});

const bestAlien = { ...ccsms, ...prmpp };

console.log(bestAlien);

//Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

const exam = [
  { name: "Abel Cabeza Román", score: 5 },
  { name: "Maria Aranda Jimenez", score: 10 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedes Reguera Brito", score: 7 },
];

const notas = exam.reduce((nota, alumno) => {
  return nota + alumno.score;
}, 0);

console.log(notas);

//Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

const newExam = [
  { name: "Abel Cabeza Román", score: 5 },
  { name: "Maria Aranda Jimenez", score: 10 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedes Reguera Brito", score: 7 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benítez Pacheco", score: 8 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const newNotas = newExam.reduce((nota, alumno) => {
  console.log(`${alumno.name}: ${nota + alumno.score}`);
  if (alumno.score >= 5) return nota + alumno.score;
  else return nota;
}, 0);

console.log(newNotas);

//Dado el siguiente array, haz la media de las notas de todos los examenes .reduce().

const average = newExam.reduce((nota, alumno) => {
  return nota + alumno.score / newExam.length;
}, 0);

console.log(average);

//Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender.

const videogames = [
  { name: "Final Fantasy VII", gender: ["RPG"], score: 9.5 },
  {
    name: "Assassin's Creed Valhalla",
    gender: ["Aventura", "RPG"],
    score: 4.5,
  },
  { name: "The Last of Us 2", gender: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros.", gender: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", gender: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    gender: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];

const rpgGames = videogames.filter((videogame) => {
  return videogame.gender.includes("RPG");
});

const avgScore = videogames.reduce((score, videogame) => {
  return score + videogame.score;
}, 0);
