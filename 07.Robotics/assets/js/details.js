let id = new URLSearchParams(window.location.search).get("id");

const details = document.querySelector(".details");
const header = document.querySelector("header");

const BASE_URL = "http://localhost:8080/products";
const goBack = document.createElement("button");

goBack.innerText = "Go back";

header.after(goBack);

async function getData() {
  const res = await axios(`${BASE_URL}/${id}`);
  //   console.log(res.data);
  details.innerHTML = `
  <div class="card">
  <img src="${res.data.image}" alt="" />
  <div class="text">
    <h3>${res.data.title}</h3>
    <p>${res.data.desc}</p>
    <button class="details">VIEW DETAILS</button>
  </div>
</div>
  `;
}

getData();

goBack.addEventListener("click", function () {
  window.history.back() 
});
