/*En base a la api Open Trivia (https://opentdb.com/api_config.php), vamos a desarrollar un trivial con la siguiente url 'https://opentdb.com/api.php?amount=10'. Esta api nos devolverá una serie de preguntas con sus respuestas, tanto erroneas como correctas. 



La idea es hacer un juego en el que el usuario introduzca en un input las caracteristicas del Trivial y que al darle al 'Start Game' le salgan las preguntas de la api para que pueda comenzar el juego. Una vez las responda todas, le mostraremos al usuario el resultado.



Ten en cuenta que hay dos tipos de preguntas. Aquellas con 3 respuestas erroneas y una correcta y aquellas con respuesta verdadero / falso.*/

const questions$$ = document.querySelector('[data-function="questions"]');

const solveQuestions$$ = document.querySelector(
  '[data-function="solveQuestions"]'
);

let answers = [];
let correctAnswers = [];

document
  .querySelector('[data-function="getQuestions"]')
  .addEventListener("click", () => {
    questions$$.innerHTML = "";
    solveQuestions$$.disabled = false;
    const questionAmount = document.querySelector(
      '[data-function="questionAmount"]'
    ).value;
    answers = [questionAmount];
    correctAnswers = [questionAmount];
    answers = fetch(
      "https://opentdb.com/api.php?type=multiple&amount=" + questionAmount
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const results = res.results;
        for (let i = 0; i < results.length; i++) {
          createQuestions(results, i);
        }
      });
  });

function createQuestions(results, i) {
  const questionDiv$$ = document.createElement("div");
  questionDiv$$.classList.add("questionDiv");

  const title$$ = document.createElement("h2");
  title$$.textContent = results[i].question;
  questionDiv$$.appendChild(title$$);

  correctAnswers[i] = results[i].correct_answer;
  let possibleAnswers = [
    ...results[i].incorrect_answers,
    results[i].correct_answer,
  ];
  possibleAnswers = shuffleArray(possibleAnswers);

  for (let j = 0; j < possibleAnswers.length; j++) {
    questionDiv$$.appendChild(createAnswers(i, possibleAnswers[j]));
  }

  questions$$.appendChild(questionDiv$$);
}

function shuffleArray(array) {
  const shuffledArray = (array) => {
    array.sort(() => Math.random() - 0.5);
  };
  return array;
}

function createAnswers(i, possibleAnswer) {
  const answerDiv$$ = document.createElement("div");
  answerDiv$$.style.display = "flex";
  answerDiv$$.classList.add("answerDiv");

  const radio$$ = document.createElement("input");
  radio$$.setAttribute("type", "radio");
  radio$$.setAttribute("name", i);
  radio$$.addEventListener("click", () => {
    answers[i] = radio$$.nextSibling.textContent;
  });
  answerDiv$$.appendChild(radio$$);

  const p$$ = document.createElement("p");
  p$$.textContent = possibleAnswer;
  answerDiv$$.appendChild(p$$);

  return answerDiv$$;
}

solveQuestions$$.addEventListener("click", () => {
  const allQuestions = document.querySelectorAll(".questionDiv");
  const allRadio = document.querySelectorAll('input[type="radio"]');

  solveQuestions$$.disabled = true;
  for (let i = 0; i < allRadio.length; i++) {
    const radio$$ = allRadio[i];
    radio$$.disabled = true;
  }
  for (let i = 0; i < allQuestions.length; i++) {
    if (answers[i] == correctAnswers[i])
      allQuestions[i].style.backgroundColor = "green";
    else allQuestions[i].style.backgroundColor = "red";
  }
});
