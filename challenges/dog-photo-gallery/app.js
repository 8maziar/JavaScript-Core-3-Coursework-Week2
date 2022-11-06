const btnAdd = document.getElementById("btn-add");
const btnClear = document.getElementById("btn-clear");
const list = document.getElementById("list");

// fetch data on button click
btnAdd.addEventListener("click", () => {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((res) => res.json())
    .then((data) => {
      createImg(data.message);
    })
    .catch((err) => (list.innerText = "Something went wrong"));
});

function createImg(url) {
  const listItem = document.createElement("li");
  const image = document.createElement("img");
  image.src = url;

  listItem.appendChild(image);
  list.appendChild(listItem);
}

// clear list on button click
btnClear.addEventListener("click", () => {
  list.innerHTML = "";
});
