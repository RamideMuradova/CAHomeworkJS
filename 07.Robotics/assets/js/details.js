// let id = new URLSearchParams(window.location.search).get("id");

// const details = document.querySelector(".details");

// const BASE_URL = "http://localhost:8080/products";

// async function getData() {
//   const res = await axios(`${BASE_URL}`);
//   console.log(res.data);
//   drawCard(res.data);
// }
// getData();
// function drawCard(data) {
//   data.forEach((element) => {
//     if (element.id == id) {
//       details.innerHTML = `
//         <div class="card">
//         <img src="${element.image}" alt="" />
//         <div class="text">
//           <h3>${element.title}</h3>
//           <p>${element.desc}</p>
//           <button class="details">VIEW DETAILS</button>
//          </div>
//        </div>`;
//     }
//   });
// }

let id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");
const BASE_URL=""

async function getData(){
    const res=await axios(`${BASE_URL}/products`)
    console.log(res.data);
    drawCard(res.data)
}
getData()

function drawCard(data){
    data.forEach((element) => {
    if(element.id==id){
        details.innerHTML=`
        `
    }
    });
}