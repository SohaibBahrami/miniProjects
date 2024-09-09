const button = document.querySelector("button");
const joke = document.querySelector("p");
button.addEventListener("click", getJoke);
function getJoke() {
  fetch("https://icanhazdadjoke.com/");
}
console.log(fetch("https://icanhazdadjoke.com/"));
