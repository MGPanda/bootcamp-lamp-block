var btnToClick = document.getElementById("btnToClick");

function clickButton(event) {
  console.log(event);
}

btnToClick.addEventListener("click", clickButton);

console.log(document.querySelector(".showme"));

console.log(document.querySelector("p#pillado"));

console.log(document.querySelectorAll("p"));

console.log(document.querySelectorAll(".pokemon"));

console.log(document.querySelectorAll('[data-function="testMe"]'));
