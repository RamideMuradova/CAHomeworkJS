const BASE_URL = "http://localhost:3000";
const allCards = document.querySelector(".allCards");
const search = document.querySelector(".search");

async function getAllData() {
  const res = await axios(`${BASE_URL}/blogs`);
  drawCards(res.data);
  console.log(res.data);
}
getAllData();
function drawCards(array) {
  allCards.innerHTML = "";
  array.forEach((element) => {
    allCards.innerHTML += `<div class="card">
        <h3>${element.title}</h3>
        <p>${element.body.slice(0, 100)} <a href="">Read More</a></p>
        <span>${element.author}</span>
        <div class="buttons">
          <button class="delete" onclick=deleteData(${
            element.id
          },this)>Delete</button>
          <a href="newBlog.html?id=${
            element.id
          }"><button class="edit">Edit</button></a>
        </div>
      </div>`;
  });
}
async function deleteData(id, btn) {
  if (confirm("are you sure to delete?")) {
    await axios.delete(`${BASE_URL}/blogs/${id}`);
    btn.closest("card").remove();
  }
}
search.addEventListener("input", async function (e) {
    // console.log(e.target.value);
    let response = await axios(`${BASE_URL}/blogs`);
    let filtered = response.data.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    drawCards(filtered);
  });