const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

function addAnimal(arrImag) {
  return arrImag.map(({ url, alt }) => {
    return `<li  class="item">
    <img src="${url}" alt="${url}" width = '300'> 
    </li>`;
  });
}

const galleryElm = document.querySelector(".gallery");
galleryElm.style.display = "flex"; //    display: flex;
galleryElm.style.listStyle = "none"; //list-style: none;
//galleryElm.classList.add("js-animal-list");
galleryElm.insertAdjacentHTML("afterbegin", addAnimal(images));
