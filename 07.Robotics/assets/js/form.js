// const BASE_URL = "http://localhost:8080/products";

// const search=document.querySelector(".search")
// let id = new URLSearchParams(window.location.search).get("id");
// const inputsAll = document.querySelectorAll("input");
// const form = document.querySelector("form");

// async function getData() {
//   try {
//     const res = await axios(`${BASE_URL}`);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData();

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   let obj = {
//     title: inputsAll[1].value,
//     desc: inputsAll[2].value,
//     image: inputsAll[0].value,
//   };

//   try {
//     if(inputsAll[1].value&& inputsAll[2].value){
//       await axios.post(`${BASE_URL}`,obj)
//     }else{
//       alert("input bos!")
//     }
//   } catch (error) {
//     console.log(error);
//   }

// });

