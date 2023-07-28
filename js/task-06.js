const inpElm = document.querySelector("#validation-input");
inpElm.addEventListener("blur", enterValue);

function replaceClass(elm, oldClass, newClass) {
  if (elm.classList.contains(oldClass)) {
    elm.classList.remove(oldClass);
  }
  elm.classList.add(newClass);
}

function enterValue(evt) {
  const inpEl = evt.currentTarget;
  if (inpEl.value.length !== Number(inpEl.dataset.length)) {
    //перше значення ЕЛЕМЕНТ друге значення клас для видалення, третє значення новий клас
    replaceClass(inpEl, "valid", "invalid");

    return;
  }
  replaceClass(inpEl, "invalid", "valid");
}
