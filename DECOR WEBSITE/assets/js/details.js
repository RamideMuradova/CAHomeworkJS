let id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");
const BASE_URL = "http://localhost:8080/products";

async function getData() {
  const res = await axios(`${BASE_URL}`);
  console.log(res.data);
  drawCard(res.data);
}
getData();

function drawCard(data) {
  data.forEach((element) => {
    if (element.id == id)
      details.innerHTML = `
        <div class="arrivals-card">
              <img src="${element.image}" alt="">
              <h5>${element.title}</h5>
              <p>${element.price}</p>
              <span>${element.desc}</span>
            </div>`;
  });
}
