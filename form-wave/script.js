const letters = document.querySelectorAll("label span");
const inputs = document.querySelectorAll("input");
let currentIndex = 0;

inputs.forEach((e) => {
  e.addEventListener("click", moveUp);
});

function moveUp() {
  if (currentIndex < letters.length) {
    letters[currentIndex].style.transform = "translateY(225%)";
    letters[currentIndex].style.color = "lightblue";
    currentIndex++;
    setTimeout(moveUp, 200);
  }
}
// function moveBack() {
//   labels.forEach((e) => {});
// }
