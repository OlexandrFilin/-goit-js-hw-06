//const arrLi = document.querySelectorAll("li[.item]");
const arrLi = document.querySelectorAll("li[class = 'item']");
console.log("Number of categories:", arrLi.length);
arrLi.forEach((itemLi) => {
  const headEl = itemLi.firstElementChild;
  console.log("Category: ", headEl.textContent);
  //const elm = itemLi.querySelectorAll("li");
  const elm = itemLi.lastElementChild.children;
  console.log("Elements:", elm.length);
});
