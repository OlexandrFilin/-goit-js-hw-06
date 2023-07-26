const inpNameElm = document.querySelector('input[id = "name-input"]');
const outpNameElm = document.querySelector("#name-output");
console.log(inpNameElm);
inpNameElm.addEventListener("input", enterName);
function enterName(ev) {
  const inpElm = ev.currentTarget;
  console.log("log ", typeof inpElm.value);
  console.log("log ", inpElm.value.length);
  if (inpElm.value.trim().length === 0) {
    outpNameElm.textContent = "Anonymous";
    return;
  }
  outpNameElm.textContent = inpElm.value;
}
