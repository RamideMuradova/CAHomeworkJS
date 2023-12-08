let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:3000";

const allCards = document.querySelector(".allCards");
console.log(id);

fetch(`${BASE_URL}/blogs/${id}`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
  });
allCards.innerHTML=`<div class="card">
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
  <a href="#" class="goBack-btn" onclick=goBack()>Go Back</a>
</div>
</div>`

function goBack() {
    window.history.back();
  }