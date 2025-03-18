let organInput = document.querySelector("#organ");
let form = document.querySelector("form");
let fact = document.querySelector("#fact");
function getInput(event) {
  event.preventDefault();
  new Typewriter("#fact", {
    strings: `${organInput.value}`,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}
addEventListener("submit", getInput);
