const choiceInput = document.querySelector("#choice-input");
const choiceContainer = document.querySelector("#choice-container");
let count = -1;

separate();
const choiceObject = document.getElementsByClassName("choices-style");

choiceInput.addEventListener("keydown", (event) => {
  if (event.key === ",") {
    separate();
  } else {
    choiceObject[count].style.display = "inline";
    const input = choiceInput.value
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());
    console.log(choiceObject);
    choiceObject[count].textContent = input[count];
  }
});

function separate() {
  const choice = document.createElement("span");
  choice.classList.add("choices-style");
  choiceContainer.appendChild(choice);
  choice.style.display = "none";
  count++;
}
