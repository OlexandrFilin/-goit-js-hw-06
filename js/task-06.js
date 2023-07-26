const inpElm = document.querySelector("#validation-input");
inpElm.addEventListener("blur", enterValue);
function enterValue(evt) {
  const inpEl = evt.currentTarget;
  if (inpEl.value.length !== Number(inpEl.dataset.length)) {
    if (inpEl.classList.contains("valid")) {
      inpEl.classList.remove("valid");
    }
    inpEl.classList.add("invalid");
    return;
  }
  if (inpEl.classList.contains("invalid")) {
    inpEl.classList.remove("invalid");
  }
  inpEl.classList.add("valid");
}
