console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
  return `<li>
    <span>${item.reja}</span>
    <button class="edit-me" data-id="${item._id}">Edit</button>
    <button class="delete-me" data-id="${item._id}">Delete</button>
  </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan harakat qiling!");
    });
});


document.addEventListener("click", function (e) {
  // delete operatsiyasi
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq ochirmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qiling!");
        });
    }
  }

  // edit/o'zgartirish operatsiyasi
  if (e.target.classList.contains("edit-me")) {
    alert("O'zgartirish tugmasi bosildi");
  }
});