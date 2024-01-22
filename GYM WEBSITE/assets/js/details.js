let id = new URLSearchParams(window.location.search).get("id");

const details = document.querySelector(".details");
const header = document.querySelector("header");

const BASE_URL = `http://localhost:3000/products`;
const goBack = document.createElement("button");

goBack.innerText = "GO BACK";

header.after(goBack);

async function getData() {
  const res = await axios(`${BASE_URL}/${id}`);
  console.log(res.data);
  details.innerHTML = `
  <div class="det-image">
  <img src="${res.data.image}" alt="">
</div>
<div class="det-text">
  <p>${res.data.title}</p>
  <p>${res.data.desc}</p>
 

</div>`;
}
getData();

goBack.addEventListener("click", function () {
  window.history.back();
});


