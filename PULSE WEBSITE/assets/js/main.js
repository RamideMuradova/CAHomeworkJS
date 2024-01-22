const BASE_URL = `http://localhost:8080/products`;
const menu = document.querySelector(".menu");
const breakfast = document.querySelector(".breakfast");
const brunch = document.querySelector(".brunch");
const lunch = document.querySelector(".lunch");
const dinner = document.querySelector(".dinner");
const btns = document.querySelectorAll(".btn");
let arr = [];
async function getAllProducts() {
  const res = await axios(`${BASE_URL}`);
  arr = res.data;
  console.log(res.data);
  drawMenu(res.data);
}
getAllProducts();

function drawMenu(data) {
  menu.innerHTML = "";
  data.forEach((element) => {
    menu.innerHTML += `<div class="menu-left">
    <h5>"${element.text}"</h5>
    <p>"${element.desc}" <p>"${element.price}"</p></p>
    <br />
  </div>
       `;
  });
}

breakfast.addEventListener("click", function () {
  let filtered = arr.filter((item) => item.category == "breakfast");
  drawMenu(filtered);
});
brunch.addEventListener("click", function () {
  let filtered = arr.filter((item) => item.category == "bruch");
  drawMenu(filtered);
});
lunch.addEventListener("click", function () {
  let filtered = arr.filter((item) => item.category == "lunch");
  drawMenu(filtered);
});
dinner.addEventListener("click", function () {
  let filtered = arr.filter((item) => item.category == "dinner");
  drawMenu(filtered);
});
btns.forEach((element) => {
  element.addEventListener("click", function () {
    document.querySelector(".buttons .active").classList.remove("active");
    this.classList.add("active");
  });
});

