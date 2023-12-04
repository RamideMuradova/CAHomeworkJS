const products = document.querySelector(".products");
const allInputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");
const BASE_URL = ` https://api.escuelajs.co/api/v1`;

fetch(`${BASE_URL}/products`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    drawCards(data);
  })
  .catch((err) => {
    console.log(err);
  });

function drawCards(arr) {
  products.innerHTML = "";
  arr.forEach((element) => {
    products.innerHTML += `
    <div class="products-div">
    <div class="product">
        <div class="product-image">
            <img src="${element.images}" style="width: 100%" alt="" />
        </div>
        <div class="product-heading">
            <p class="title">${element.title}title</p>
            <p class="description">${element.description}</p>
            <span>${element.price}</span>
            <div><button class="deleteBtn">Delete</button></div>
        </div>
    </div>
        `;
  });
}
function deleteCustomer(productsId) {
    console.log(productsId);
  fetch(`${BASE_URL}/products/${productsId}`, {
    method: "DELETE",
  }).then(() => {
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        drawCards(data);
      })
      .catch((err) => {
        // console.log(err);
      });
  });
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    title: input[0].value,
    price: input[1].value,
    description: input[2].value,
    images: input[3].value,
  };
});

fetch(`${BASE_URL}/products`, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(obj),
}).then(() => {
  fetch(`${BASE_URL}/products`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      drawCards(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
products.forEach((item) => (item.value = ""));
