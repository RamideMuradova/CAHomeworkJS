const BASE_URL = "http://localhost:3000/products";

async function getData() {
  let response = await axios.get(`${BASE_URL}`);
  console.log(response.data);
  drawCard(response.data);
}
getData();

