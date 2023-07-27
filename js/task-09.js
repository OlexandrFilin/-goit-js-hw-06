function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElm = document.querySelector(".change-color");
const bodyElm = document.querySelector("body");
const txtColorElm = document.querySelector("span[class = 'color']");

btnElm.addEventListener("click", onChangeColor);

function onChangeColor() {
  const colorRandom = getRandomHexColor();
  bodyElm.style.backgroundColor = colorRandom;
  txtColorElm.textContent = colorRandom;
}
