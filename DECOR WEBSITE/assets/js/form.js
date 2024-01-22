let allInputs = document.querySelectorAll("input");
let tbody = document.querySelector("tbody");
let form = document.querySelector("form");
let searchInp = document.querySelector(".search");
let sortBtn = document.querySelector(".sortBtn");

let cardArr;
let copyCardArr;
const BASE_URL = "http://localhost:8080/products";

//get

async function getAllProducts() {
  const res = await axios(`${BASE_URL}`);
  console.log(res.data);
  cardArr = res.data;
  copyCardArr = [...res.data];
  drawTable(res.data);
}
getAllProducts();

//drawTable

function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    tbody.innerHTML += `<tr>
        <td>${element.id}</td>
        <td><img src="${element.image}"/></td>
        <td>${element.title}</td>
        <td>${element.desc}</td>
        <td>${element.price}</td>
        <td><button class="delete" onclick=deletebtn(${element.id},this)>DELETE</button></td>
      </tr>
      
        `;
  });
}

// delete

async function deletebtn(id, btn) {
  try {
    if (confirm("are you sure delete this element???")) {
      await axios.delete(`${BASE_URL}/${id}`);
      btn.closest("tr").remove();
    }
  } catch (error) {
    console.log(error);
  }
}

//add(post)
form.addEventListener("submit", async function () {
  try {
    let obj = {
      image: allInputs[1].value,
      title: allInputs[2].value,
      desc: allInputs[3].value,
      price: allInputs[4].value,
    };
    if (allInputs[1].value && allInputs[2].value && allInputs[3]) {
      await axios.post(`${BASE_URL}`, obj);
      getAllProducts();
    } else {
      alert("input bosdur");
    }
  } catch (error) {
    console.log(error);
  }
});

// search
searchInp.addEventListener("input", function (e) {
  let filtered = cardArr.filter((item) =>
    item.title.toLocaleLowerCase().includes(e.target.value)
  );
  drawTable(filtered);
});

//sort

sortBtn.addEventListener("click", function () {
  let sorted;
  if (sortBtn.innerText === "Asc") {
    this.innerText = "Desc";
    sorted = cardArr.sort((a, b) =>
      a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase())
    );
  } else if (sortBtn.innerText === "Desc") {
    this.innerText = "Def";
    sorted = cardArr.sort((a, b) =>
      b.title.toLocaleLowerCase().localeCompare(a.title.toLocaleLowerCase())
    );
  } else if (sortBtn.innerText === "Def") {
    sorted = copyCardArr;
  }
  drawTable(sorted);
});
