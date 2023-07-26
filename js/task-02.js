const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingradCard = ingredients.map((ingradient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingradient;
  liEl.classList.add("item");
  return liEl;
});

const ingradientsEl = document.querySelector("#ingredients");

ingradientsEl.append(...ingradCard);
