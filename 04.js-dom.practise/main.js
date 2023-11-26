let inputs = document.querySelector(".inputs");
let numberOne = document.querySelector(".numberOne");
let numberTwo = document.querySelector(".numberTwo");
let addition = document.querySelector(".addition");
let substract = document.querySelector(".substract");
let multiply = document.querySelector(".multiply");
let division = document.querySelector(".division");
let reset = document.querySelector(".reset");

let count = 0;

addition.addEventListener("click", function () {
  count = +numberOne.value + +numberTwo.value;
  inputs.innerText = count;
});

substract.addEventListener("click", function () {
  count = +numberOne.value - +numberTwo.value;
  inputs.innerText = count;
});

multiply.addEventListener("click", function () {
  count = +numberOne.value * +numberTwo.value;
  inputs.innerText = count;
});

division.addEventListener("click", function () {
  count = +numberOne.value / +numberTwo.value;
  inputs.innerText = count;
});

reset.addEventListener("click", function () {
  numberOne.value = "";
  numberTwo.value = "";
  inputs.innerText = 0;
});
