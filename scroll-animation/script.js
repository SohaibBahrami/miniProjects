const originalContent = document.querySelector(".original");
const mainPage = document.querySelector("section");
const content = document.querySelectorAll(".original");
let scroll = 0;
let lastScroll = 0;
let isLoading = false;

document.addEventListener("scroll", () => {
  scroll = window.scrollY;
  let windowHeight = window.innerHeight;
  let pageHeight = mainPage.offsetHeight;
  if (scroll + windowHeight <= pageHeight && !isLoading) {
    content.forEach((e) => {
      e.classList.add("slide-in");
    });
  }
});
