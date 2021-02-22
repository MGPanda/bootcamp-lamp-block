// EXERCISE 2

/*Crea 3 funciones llamadas father, sum, subtract. La función sum sumara dos parametros a y b y los retornará. La función substract hará lo mismo pero restando y la función father recibirá como parámetros a, b y una función callback (sum o substract).



La función father deberá ejecutar la función que reciba como callback y añadir el numero que retorne la función al array numersList.



Ejecuta varias veces la función father y haz finalmente un console.log de numbersList*/

const numberList = [];

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function father(operation, a, b) {
  numberList.push(operation(a, b));
}

father(sum, 5, 10);
father(subtract, 4, 7);
father(sum, 8, 1);
father(subtract, 2, 3);
father(sum, 16, 3);

console.log([...numberList]);

// EXERCISE 2

/*Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample. La función confirmExample recibirá una variable de texto que mostrará como titulo de la ventana y retornará el valor del confirm. La función promptExample hará lo mismo pero con un prompt. La función father recibirá como parámetros tex, con el valor del titulo de las ventanas y una función callback (confirmExample o promptExample).



La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array numersList.



Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers*/

const userAnswers = [];

function confirmExample(title) {
  return confirm(title);
}

function promptExample(title) {
  return prompt(title);
}

function father2(text, window) {
  userAnswers.push(window(text));
}

father2("Alpha", confirmExample);
father2("Beta", promptExample);
father2("Charlie", confirmExample);
father2("Delta", promptExample);
father2("Echo", confirmExample);

console.log([...userAnswers]);
