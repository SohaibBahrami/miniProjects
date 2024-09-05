const psSide = document.querySelector("#ps");
const xboxSide = document.querySelector("#xbox");
const psText = document.querySelector("div div");
const xboxText = document.querySelector("xbox-div");
psSide.addEventListener("mouseover", () => {
  psSide.style.transform = "translateX(-25vw)";
  psText.style.transform = "translateX(-150px)";
  xboxSide.style.transform = "translateX(75vw)";
});
psSide.addEventListener("mouseout", () => {
  psSide.style.transform = "translateX(-50vw)";
  psText.style.transform = "translateX(0)";
  xboxSide.style.transform = "translateX(50vw)";
});
xboxSide.addEventListener("mouseover", () => {
  psSide.style.transform = "translateX(-75vw)";
  xboxSide.style.transform = "translateX(25vw)";
  xboxText.style.transform = "translateX(-150px)";
});
xboxSide.addEventListener("mouseout", () => {
  psSide.style.transform = "translateX(-50vw)";
  xboxSide.style.transform = "translateX(50vw)";
  xboxText.style.transform = "translateX(0)";
});
