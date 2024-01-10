const BASE_URL = "http://localhost:3000/products";
const products = document.querySelector(".flowers");

async function getData() {
  let response = await axios.get(`${BASE_URL}`);
  console.log(response.data);
  drawCard(response.data);
}
getData();
function drawCard(arr) {
  products.innerHTML = "";
  arr.forEach((element) => {
    let divElem = document.createElement("div");
    divElem.className = "images";
    divElem.innerHTML += `<div class="flowers">
    <div class="images">
      <div class="h3">
        <img src="${element.image}" alt="" />
        <h3>"${element.description}"</h3>
        <p>"${element.price}"</p>
      </div> 
    </div>
  </div>`;
  });
  products.append(divElem);
}
