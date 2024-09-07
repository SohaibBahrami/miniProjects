const soundNames = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
soundNames.forEach((e) => {
  const buttons = document.createElement("button");
  buttons.classList.add("btn");
  buttons.innerText = e;
  buttons.addEventListener("click", () => {
    stopSongs();
    document.getElementById(e).play();
  });
  document.getElementById("buttons-container").appendChild(buttons);
});
function stopSongs() {
  soundNames.forEach((e) => {
    const audio = document.getElementById(e);
    audio.pause();
    audio.currentTime = 0;
  });
}
