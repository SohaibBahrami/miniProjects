const bgBlur = document.querySelector("body");
const bgDark = document.querySelector("#bg-cover");
const counter = document.querySelector("#counter");
let load = 0;
let dark = 100;
let timer = setInterval(() => {
  load++;
  dark--;
  counter.innerHTML = load;
  bgDark.style.background = `rgba(0, 0, 0, ${dark / 100})`;
  bgBlur.style.backdropFilter = `blur(${dark / 10}px)`;
  if (load == 100) {
    window.clearTimeout(timer);
    document.querySelector("p").style.opacity = "0%";
  }
}, 50);
