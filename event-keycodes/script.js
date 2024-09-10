const section = document.querySelector("section");
const p = document.querySelector("p");

const key = document.querySelector(".key");
const keyCode = document.querySelector(".keyCode");
const code = document.querySelector(".code");

document.addEventListener("keydown", info);

function info(e) {
  key.innerText = e.key;
  keyCode.innerText = e.keyCode;
  code.innerText = e.code;

  section.classList.remove("hidden");
  p.classList.add("hidden");
}
