// const BASE_URL = `http://localhost:3000/products`;
// const aboutCards = document.querySelector(".about-cards");

// async function getAllProducts() {
//   const res = await axios(`${BASE_URL}`);
//   console.log(res.data);
//   drawCards(res.data);
// }
// getAllProducts();

// function drawCards(data) {
//   aboutCards.innerHTML = "";
//   data.forEach((element) => {
//     aboutCards.innerHTML += `<div class="about-card">
//         <img src="${element.image}" alt="" />
//         <h4>"${element.title}"</h4>
//         <p>"${element.desc}"</p>
//         <a href="details.html?id=${element.id}">Details</a>
//                 <button onclick="deleteBtn(${element.id},this)">Delete</button>
//                 <button onclick "form.html?id=${element.id}">Edit</button>
//       </div>
//         `;
//   });
// }

// async function deleteBtn(id, btn) {
//   if (confirm("are you sure delete???")) {
//     await axios.delete(`${BASE_URL}/${id}`);
//     btn.closest(".about-card").remove();
//   }
// }
