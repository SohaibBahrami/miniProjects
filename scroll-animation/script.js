const originalContent = document.querySelector(".original");
const mainPage = document.querySelector("section");
let scroll = 0;
let lastScroll = 0;
let isLoading = false;

document.addEventListener("scroll", () => {
  scroll = Math.floor(window.scrollY);
  const windowHeight = window.innerHeight;
  const pageHeight = mainPage.offsetHeight;

  if (scroll + windowHeight >= pageHeight && !isLoading) {
    isLoading = true;
    loadMoreContent();
    lastScroll = scroll;
  }
  console.log(scroll);
  console.log(lastScroll);
});

function loadMoreContent() {
  let extraContent = document.createElement("div");
  extraContent.className = "original";
  extraContent.innerHTML = originalContent.innerHTML;
  mainPage.append(extraContent);
  isLoading = false;
  if (scroll < lastScroll) {
    mainPage.removeChild(extraContent);
  }
}
