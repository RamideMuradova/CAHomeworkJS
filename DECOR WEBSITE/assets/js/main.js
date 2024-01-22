const BASE_URL = "  http://localhost:8080/products";
const cards = document.querySelector(".arrivals-cards");

async function getAllProducts() {
  const res = await axios(`${BASE_URL}`);
  console.log(res.data);
  drawCards(res.data);
}
getAllProducts();

function drawCards(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `<div class="arrivals-card">
        <img src="${element.image}" alt="">
        <h5>${element.title}</h5>
        <p>${element.price}</p>
        <span>${element.desc}</span>
        <br>
        <a href ="details.html" class="a-tag" onclick="detail.html?${element.id}">Details</a>
        <br>
        <button class="delete" onclick=deletecard(${element.id},this)>Delete</button>
      </div>
        `;
  });
}

async function deletecard(id, btn) {
  if (confirm("are you delete???")) {
    await axios.delete(`${BASE_URL}/${id}`);
    btn.closest(".card").remove();
  }
}
