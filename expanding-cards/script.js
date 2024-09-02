let divs = document.querySelectorAll("div");
divs.forEach((div) => {
  div.addEventListener("click", () => {
    let on = document.querySelector(".default-on");
    if (div.classList.contains("default-on")) {
    } else {
      on.classList.remove("default-on");
      on.classList.add("default-off");
      div.classList.add("default-on");
      div.classList.remove("default-off");
    }
  });
});
