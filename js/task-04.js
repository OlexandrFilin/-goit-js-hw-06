let counterValue = 0;
let counterValueEl = document.querySelector("#value");
const decrBtn = document.querySelector('button[data-action = "decrement"]');
const incrBtn = document.querySelector('button[data-action = "increment"]');

const eventClick = (ev) => {
  if (ev.currentTarget === decrBtn) {
    counterValue -= 1;
  } else if (ev.currentTarget === incrBtn) {
    counterValue += 1;
  }
  counterValueEl.textContent = counterValue;
};

decrBtn.addEventListener("click", eventClick);
incrBtn.addEventListener("click", eventClick);
