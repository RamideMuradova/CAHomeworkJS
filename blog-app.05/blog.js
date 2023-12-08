const form = document.querySelector(".form");
const input = document.querySelector(".input");
const textarea = document.querySelector("textarea");
const select = document.querySelector("#select-options");

const BASE_URL = "http://localhost:3000";
const id = new URLSearchParams(window.location.search).get("id");
// console.log(id);
async function getData() {
  const res = await axios(`${BASE_URL}/blogs/${id}`);
  console.log(res.data);

  input.value = res.data.title;
  textarea.value = res.data.body;
}
if (id) {
  getData();
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let newBlogs = {
    title: input.value,
    body: textarea.value,
  };
  if (!id) {
    axios.post(`${BASE_URL}/blogs`, newBlogs);
  } else {
    axios.patch(`${BASE_URL}/blogs`, newBlogs);
  }

  input.forEach((item) => (item.value = ""));
});
