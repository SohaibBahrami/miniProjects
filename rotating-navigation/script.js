const openMenu = document.querySelector("#menu-icon");
const closeMenu = document.querySelector("#close-icon");
const menuButtons = document.querySelector("#menu-buttons");
const mainContent = document.querySelector("main");
const navbar = document.querySelector("nav");
openMenu.addEventListener("click", () => {
  menuButtons.classList.add("rotated");
  mainContent.style.transform = "translate(15% , -15%)";
  mainContent.style.rotate = "-15deg";
  navbar.style.left = "0";
});
closeMenu.addEventListener("click", () => {
  menuButtons.classList.remove("rotated");
  mainContent.style.transform = "translate(0)";
  mainContent.style.rotate = "0deg";
  navbar.style.left = "-20%";
});
