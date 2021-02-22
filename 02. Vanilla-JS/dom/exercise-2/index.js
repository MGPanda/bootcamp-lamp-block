const div$$ = document.createElement("div");

const p$$ = document.createElement("p");

for (let i = 0; i < 6; i++) {
  const p$$ = document.createElement("p");
  div$$.appendChild(p$$);
}

document.body.appendChild(div$$);

//
const dinamicP$$ = document.createElement("p");
dinamicP$$.innerHTML = "Soy dinámico!";

document.body.appendChild(dinamicP$$);

//
let wldd$$ = document.querySelector(".fn-insert-here");
wldd$$.innerHTML = "Wubba lubba dub dub!";

//
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

let unorderedList = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = apps[i];
  unorderedList.appendChild(listItem);
}

document.body.appendChild(unorderedList);

//
const removables = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < removables.length; i++) {
  removables[i].remove();
}

//
const divs$$ = document.querySelector(".placeAfter");

const pBetween$$ = document.createElement("p");

pBetween$$.textContent = "Estoy en medio!";

div$$.after(pBetween$$);

//
const insertHere$$ = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < insertHere$$.length; i++) {
  let innerP$$ = document.createElement("p");
  innerP$$.textContent = "Voy dentro!";
  insertHere$$[i].appendChild(innerP$$);
}
