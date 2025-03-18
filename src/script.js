let organInput = document.querySelector("#organ");
let form = document.querySelector("form");
let fact = document.querySelector("#fact");
function getInput(event) {
  event.preventDefault();
  console.log(organInput.value);
}
addEventListener("submit", getInput);
