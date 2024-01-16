let id = URLSearchParams(window.location.search).get("id");

const details = document.querySelector(".details");
const header = document.querySelector(".header");

const BASE_URL = `http://localhost:3000/products`;
const goBack = document.createElement(".button");

goBack.innerText = "GO BACK";

header.after(goBack);

async function getData() {
  const res = await axios(`${BASE_URL}/${id}`);
  console.log(res.data);
  details.innerHTML = `
    <div class="about-card">
            <img src="${res.data.image}" alt="" />
            <h4>"${res.data.title}"</h4>
            <p>"${res.data.desc}"</p>
          </div>`;
}
getData();

goBack.addEventListener("click", function () {
  window.history.back();
});


