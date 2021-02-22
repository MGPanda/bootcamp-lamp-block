//En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola.

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const [title, gender, year] = [game.title, game.gender, game.year];

console.log(title + [...gender] + year);

//En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.

const fruits = ["Banana", "Strawberry", "Orange"];
const [fruit1, fruit2, fruit3] = fruits;

console.log(`${fruit1} ${fruit2} ${fruit3}`);

//En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();

console.log(`${name} ${race}`);

//En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const [carName, itv] = [car.name, car.itv];
const [itv1, itv2, itv3] = [itv[0], itv[1], itv[2]];
