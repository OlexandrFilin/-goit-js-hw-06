function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inpAmountElm = document.querySelector("input[type = 'number']");
inpAmountElm.value = 1;
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

const divBox = document.querySelector("#boxes");
function greatrBox(ammount) {
  let size = 30;
  let colorRandom = getRandomHexColor();
  let block = "";
  for (let i = 1; i <= ammount; i += 1) {
    block += `<div style= 'background-color:${colorRandom}; width:${size}px;height:${size}px; margin-bottom :10px;'></div>`;
    colorRandom = getRandomHexColor();
    size += 10;
  }
  return block;
}

btnCreate.addEventListener("click", onClickBtnCreateBox);
function onClickBtnCreateBox() {
  divBox.innerHTML = "";
  divBox.insertAdjacentHTML("beforeend", greatrBox(inpAmountElm.value));
}
btnDestroy.addEventListener("click", onClickBtnDestroy);
function onClickBtnDestroy() {
  divBox.innerHTML = "";
}
