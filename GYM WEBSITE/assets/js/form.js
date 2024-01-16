const BASE_URL = `http://localhost:3000/products`;

let id = new URLSearchParams(window.location.search).get("id");
const form = document.querySelector("form");
async function getData() {
  try {
    const res = await axios(`${BASE_URL}/${id}`);
    console.log(res.data);
    inputsAll[1].value = res.data.title;
    inputsAll[2].value = res.data.desc;
  } catch (error) {
    console.log(error);
  }
}

if (id) {
  getData();
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    title: inputsAll[1].value,
    desc: inputsAll[2].value,
    image: `./assets/images/${inputsAll[0].value.split("\\")[2]}`,
  };
  if (!id) {
    if (inputsAll[1].value != "" && inputsAll[2].value != "") {
      await axios.post(`${BASE_URL}`, obj);
    } else {
      window.alert("bu hisse mutleq doldurulmalidir!!");
    }
  } else {
    await axios.patch(`${BASE_URL}/${id}`, obj);
  }

  window.location = "gym.html";
});
