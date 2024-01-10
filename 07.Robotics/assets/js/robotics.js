// const BASE_URL = "http://localhost:8080";
// const cards = document.querySelector(".cards");
// async function getAllProducts() {
//   const res = await axios(`${BASE_URL}/products`);
// //   console.log(res.data);
// drawCards(res.data)
// }
// getAllProducts();

// function drawCards(data) {
//   cards.innerHTML = "";
//   data.forEach((element) => {
//     cards.innerHTML += `
//     <div class="card">
//               <img src="${element.image}" alt="" />
//               <div class="text">
//                 <h3>"${element.title}"</h3>
//                 <p>"${element.desc}"</p>
//                 <button class="details">VIEW DETAILS</button>
//               </div>
//             </div>
//     `;
//   });
// }

const BASE_URL = "http://localhost:8080/products";
const cards = document.querySelector(".cards");

async function getAllProducts() {
  const res = await axios(`${BASE_URL}`);
  console.log(res.data);
  drawCards(res.data);
}

getAllProducts();
function drawCards(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
     <div class="card">
              <img src="${element.image}" alt="" />
              <div class="text">
                <h3>"${element.title}"</h3>
                <p>"${element.desc}"</p>
               <a href="details.html?id=${element.id}">Details</a>
                <a href="#" onclick="deleteBtn(${element.id},this)">Delete</a>
                <a href="form.html?id=${element.id}">Edit</a>
              </div>
            </div> 
    `;
  });
}

async function deleteBtn(id, btn) {
  if (confirm("are you sure delete??")) {
    await axios.delete(`${BASE_URL}/${id}`);
    btn.closest(".card").remove();
  }
}
