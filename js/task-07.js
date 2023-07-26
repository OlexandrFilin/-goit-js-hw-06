const sliderElm = document.querySelector("input[type = 'range']");
const spanElm = document.querySelector("#text");
sliderElm.addEventListener("input", changeFontSize);
function changeFontSize(evt) {
  const changeFontElm = evt.currentTarget;
  spanElm.style.fontSize = `${changeFontElm.value}px`;
}
