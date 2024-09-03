const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const numbers = document.querySelectorAll("p");
const progressBar = document.querySelector("#progress-bar");
let barWidth = 0;
let active = 1;
nextButton.addEventListener("click", () => {
  barWidth += 8;
  progressBar.style.width = barWidth + "vw";
  numbers[active].classList.add("active");
  active++;
  checkActive();
  console.log(active);
});
prevButton.addEventListener("click", () => {
  barWidth -= 8;
  progressBar.style.width = barWidth + "vw";
  active--;
  numbers[active].classList.remove("active");
  checkActive();
  console.log(active);
});
function checkActive() {
  if (active == 4) {
    nextButton.classList.add("disabled");
    nextButton.disabled = true;
  } else {
    nextButton.classList.remove("disabled");
    nextButton.disabled = false;
  }
  if (active == 1) {
    prevButton.classList.add("disabled");
    prevButton.disabled = true;
  } else {
    prevButton.classList.remove("disabled");
    prevButton.disabled = false;
  }
}

// ((active.length - 1) / (circles.length - 1)) * 100 + "%";
