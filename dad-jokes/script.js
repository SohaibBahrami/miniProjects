const button = document.querySelector("button");
const joke = document.querySelector("p");

getJoke();

button.addEventListener("click", getJoke);

async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  await response
    .json()
    .then((data) => {
      joke.innerHTML = data.joke;
    })
    .catch((e) => {
      console.log(e);
    });
}
