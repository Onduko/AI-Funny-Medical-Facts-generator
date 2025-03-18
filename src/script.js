let organInput = document.querySelector("#organ");
let form = document.querySelector("form");
let fact = document.querySelector("#fact");
let icon = document.querySelector(".icon");

function displayJoke(response) {
  new Typewriter("#fact", {
    strings: `${response.data.answer}`,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}
function generateJoke(input) {
  let prompt = `Hello, please generate random medical jokes regarding the ${input}`;
  let context = `Please generete only one joke each time displaying a different joke when prompted`;
  let apiKey = `9b5ff5067a4fcbft35338801bbo0df4a`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayJoke);
}
function getInput(event) {
  event.preventDefault();
  generateJoke(organInput.value);
}
addEventListener("submit", getInput);
