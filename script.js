const flipper = document.querySelector(".flipper");
function flip() {
  flipper.style.transform =
    flipper.style.transform === "rotateY(180deg)"
      ? "rotateY(0deg)"
      : "rotateY(180deg)";
}
