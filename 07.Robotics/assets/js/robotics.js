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

const searchInp = document.querySelector(".search");
const ascBtn = document.querySelector(".asc");
const BASE_URL = "http://localhost:8080/products";
const cards = document.querySelector(".cards");
let cardArr;
let copyCardArr;

async function getAllProducts() {
  const res = await axios(`${BASE_URL}`);
  console.log(res.data);
  cardArr = res.data;
  copyCardArr=[...res.data]
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

searchInp.addEventListener("input", function (e) {
  // console.log(e.target.value);
  let filtered = cardArr.filter((item) =>
    item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  // cardArr.filter(item=>console.log(item.title.toLocaleLowerCase()))
  drawCards(filtered);
});

ascBtn.addEventListener("click",function sortCard(){
  let sorted;
  if(ascBtn.innerText==="asc"){
    ascBtn.innerText="desc";
    sorted=cardArr.sort((a,b)=>a.id-b.id)
  }else if(ascBtn.innerText==="desc" ){
ascBtn.innerText="asc"
sorted=cardArr.sort((a,b)=>b.id-a.id)
  }
  else if(ascBtn.innerText==="asc"){
sorted=copyCardArr
  }
  drawCards(sorted)
})
