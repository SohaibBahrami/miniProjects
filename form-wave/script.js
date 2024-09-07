const emailLetters = document.querySelectorAll("#email-letters span");
const passwordLetters = document.querySelectorAll("#password-letters span");
const inputs = document.querySelectorAll("input");
let currentIndex = 0;

inputs[0].addEventListener("click", () => {
  resetAnimation();
  currentIndex = 0;
  moveUpEmail();
});
inputs[1].addEventListener("click", () => {
  resetAnimation();
  currentIndex = 0;
  moveUpPassword();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest("input")) {
    resetAnimation();
  }
});

function moveUpEmail() {
  emailLetters[currentIndex].classList.add("moved");
  currentIndex++;
  setTimeout(moveUpEmail, 50);
}
function moveUpPassword() {
  passwordLetters[currentIndex].classList.add("moved");
  currentIndex++;
  setTimeout(moveUpPassword, 50);
}
function resetAnimation() {
  emailLetters.forEach((letter) => letter.classList.remove("moved"));
  passwordLetters.forEach((letter) => letter.classList.remove("moved"));
  currentIndex = 0;
}
