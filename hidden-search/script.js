const searchButton = document.querySelector("button");
const searchBar = document.querySelector("input");
searchButton.addEventListener("click", () => {
  if (searchBar.classList.contains("open-bar")) {
    searchBar.classList.remove("open-bar");
    searchBar.disabled = true;
    document.querySelector("section").style.width = "4vw";
  } else {
    searchBar.classList.add("open-bar");
    searchBar.disabled = false;
    document.querySelector("section").style.width = "100%";
  }
});
