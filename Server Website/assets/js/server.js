const BASE_URL = `  http://localhost:8000/products`;
const aboutCards = document.querySelector(".about-cards");

async function getAllProducts() {
  const res = await axios(`${BASE_URL}`);
//   // console.log(res.data);
  drawCards(res.data);
}

getAllProducts();

function drawCards(data) {
  aboutCards.innerHTML = "";
  data.forEach((element) => {
    aboutCards.innerHTML += `
        <div class="about-card">
              <img src="${element.image}" alt="" />
              <h3>"${element.title}"</h3>
              <p>"${element.desc}"</p>
              <a href="details.html?id=${element.id}">Details</a>
              <a href="#" onclick="deleteBtn(${element.id},this)">Delete</a>
              <a href="form.html?id=${element.id}">Edit</a>
              </div>
              `;
  });
}

async function deleteBtn(id, btn) {
  if (confirm("are you sure delete??")) {
    await axios.delete(`${BASE_URL}/${id}`);
    btn.closest(".about-card").remove();
  }
}

