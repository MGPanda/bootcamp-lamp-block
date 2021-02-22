const charsDiv$$ = document.querySelector('[data-function="charsDiv"]');
const playRestart$$ = document.querySelector('[data-function="playRestart"]');
let isSimulating = false;

let characters = [];

let chosenCharacters = [];
let turn = 0;
let vitalities = [];

const setup = async () => {
  charsDiv$$.innerHTML = "";
  isSimulating = false;
  chosenCharacters = [];
  playRestart$$.textContent = "¡Comenzar batalla!";
  playRestart$$.disabled = true;
  const res = await fetch("http://localhost:3000/characters");
  characters = await res.json();
  for (let i = 0; i < characters.length; i++) {
    charsDiv$$.appendChild(createCard(characters[i]));
  }

  playRestart$$.addEventListener("click", startFight);
};

const createCard = (character) => {
  const charCard$$ = document.createElement("div");
  charCard$$.classList.add("charCard", "card");
  if (!isSimulating)
    charCard$$.addEventListener("click", () => {
      checkIfSelected(charCard$$, character.id);
    });

  const img$$ = document.createElement("img");
  img$$.src = character.avatar;
  charCard$$.appendChild(img$$);

  const textDiv$$ = document.createElement("div");

  const h1$$ = document.createElement("h1");
  h1$$.textContent = character.name;
  textDiv$$.appendChild(h1$$);

  const diceP$$ = document.createElement("p");
  diceP$$.textContent = `Daño: ${[...character.damage]}`;
  textDiv$$.appendChild(diceP$$);

  const critP$$ = document.createElement("p");
  critP$$.textContent = `Crítico: ${character.critic}`;
  textDiv$$.appendChild(critP$$);

  const defenseP$$ = document.createElement("p");
  defenseP$$.textContent = `Defensa: ${character.defense}`;
  textDiv$$.appendChild(defenseP$$);

  const vitalityP$$ = document.createElement("p");
  vitalityP$$.textContent = `Vitalidad: ${character.vitality}`;
  vitalityP$$.classList.add("charVitality");
  textDiv$$.appendChild(vitalityP$$);

  charCard$$.appendChild(textDiv$$);
  return charCard$$;
};

const checkIfSelected = (charCard$$, charId) => {
  if (chosenCharacters.includes(charId)) {
    charCard$$.style.border = "2px solid black";
    chosenCharacters.splice(chosenCharacters.indexOf(charId), 1);
    playRestart$$.disabled = true;
  } else {
    if (chosenCharacters.length < 2) {
      charCard$$.style.border = "2px solid red";
      chosenCharacters.push(charId);
      if (chosenCharacters.length == 2) playRestart$$.disabled = false;
    }
  }
};

const startFight = () => {
  charsDiv$$.innerHTML = "";
  isSimulating = true;
  playRestart$$.textContent = "Reiniciar simulación";
  playRestart$$.disabled = true;
  playRestart$$.addEventListener("click", setup);

  for (let i = 0; i < chosenCharacters.length; i++) {
    for (let j = 0; j < characters.length; j++) {
      if (characters[j].id == chosenCharacters[i]) {
        charsDiv$$.appendChild(createCard(characters[j]));
        chosenCharacters[i] = characters[j];
      }
    }
  }

  const div$$ = document.createElement("div");
  div$$.classList.add("card", "battleCard");

  vitalities = document.querySelectorAll(".charVitality");

  turn = Math.floor(Math.random() * 2);

  const introP$$ = document.createElement("p");
  introP$$.textContent = `Empieza el ${chosenCharacters[turn].name}.`;
  div$$.appendChild(introP$$);

  charsDiv$$.appendChild(div$$);

  processBattle(div$$);

  playRestart$$.disabled = false;
};

const processBattle = async (div$$) => {
  do {
    await new Promise((res) => setTimeout(res, 500));
    processTurn(div$$);
  } while (
    chosenCharacters[0].vitality > 0 &&
    chosenCharacters[1].vitality > 0
  );
};

const processTurn = (div$$) => {
  let next = 0;
  if (turn == 0) next = 1;
  else next = 0;

  const player = chosenCharacters[turn];
  const rival = chosenCharacters[next];

  for (let i = 0; i < player.damage.length; i++) {
    const element = player.damage[i];
    const dice = element.split("d");
    let crit = false;
    let damage = 0;

    for (let j = 0; j < parseInt(dice[0]); j++) {
      damage += Math.floor(Math.random() * (parseInt(dice[1]) + 1));
    }

    if (damage == player.critic) {
      damage *= 2;
      crit = true;
    }

    const attackP$$ = document.createElement("p");
    attackP$$.textContent = `El ${player.name} intenta un golpe de ${damage} contra la defensa ${rival.defense} del ${rival.name}.`;
    div$$.appendChild(attackP$$);

    const difference = damage - rival.defense;

    if (difference > 0) {
      rival.vitality -= difference;
      if (rival.vitality < 0) rival.vitality = 0;
      vitalities[
        next
      ].textContent = `Vitalidad: ${chosenCharacters[next].vitality}`;
      const confirmationP$$ = document.createElement("p");
      confirmationP$$.classList.add("attack");
      if (crit) confirmationP$$.textContent += "¡CRÍTICO! ";
      confirmationP$$.textContent += `¡El ${player.name} hace ${difference} puntos de daño al ${rival.name}!`;
      div$$.appendChild(confirmationP$$);
    }
    turn = next;
  }
};

setup();
