const psSide = document.querySelector("#ps");
const xboxSide = document.querySelector("#xbox");
const psText = document.querySelector("#ps-div div");
const xboxText = document.querySelector("#xbox-div div");
psSide.addEventListener("mouseover", () => {
  psSide.style.transform = "translateX(20vw)";
  xboxSide.style.transform = "translateX(20vw)";
  psText.style.transform = "translateX(50px)";
});
psSide.addEventListener("mouseout", () => {
  psSide.style.transform = "translateX(0vw)";
  xboxSide.style.transform = "translateX(0vw)";
  psText.style.transform = "translateX(0)";
});
xboxSide.addEventListener("mouseover", () => {
  psSide.style.transform = "translateX(-20vw)";
  xboxSide.style.transform = "translateX(-20vw)";
  xboxText.style.transform = "translateX(-50px)";
});
xboxSide.addEventListener("mouseout", () => {
  psSide.style.transform = "translateX(0vw)";
  xboxSide.style.transform = "translateX(0vw)";
  xboxText.style.transform = "translateX(0)";
});
