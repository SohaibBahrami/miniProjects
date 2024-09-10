const choiceInput = document.querySelector("#choice-input");
const choiceContainer = document.querySelector("#choice-container");

const choice = document.createElement("span");
choice.classList.add("choices");
choiceContainer.appendChild(choice);

choiceInput.addEventListener("input", () => {
  if (choiceInput.value.includes(",")) {
    separate();
  } else {
    choice.textContent = choiceInput.value;
  }
});

function separate() {
  const choice = document.createElement("span");
  choice.classList.add("choices");
  choice.textContent = choiceInput.value;
  choiceContainer.appendChild(choice);
}
