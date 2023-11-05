//TASK 1
// let array = new Array();
// let numbers = [12, 7, 3, 9, 6, 15, 18];
// for (let i = 0; i < numbers.length; i++) {
//   array.push(numbers[i] ** 2);
// }
// console.log(array);

//TASK 2
// let numbers = [12, 7, 3, 9, 6, 15, 18];

// let min = numbers[0];
// let max = numbers[0];

// let minIndex = 0;
// let maxIndex = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//     minIndex = i;
//   }
//   if (numbers > max) {
//     max = numbers[i];
//     maxIndex = i;
//   }
// }
// console.log("Numbers: ", numbers);
// numbers[minIndex] = max;
// numbers[maxIndex] = min;

//TASK 3
// let numbers = [12, 7, 3, 9, 6, 15, 18];
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//     minIndex = i;
//   }
// }
// console.log("minIndex: ", minIndex);

//TASK 4
// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];
// let filteredEmployees = [];
// for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i].salary);
//   if (employees[i].salary > 65000) {
//     console.log(employees[i]);
//     filteredEmployees.push(employees[i]);
//   }
//   employees[i].salary > 65000 && filteredEmployees.push(employees[i]);
// }
// console.log("filteredEmployees" , filteredEmployees);

//TASK 5
// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];
// let filteredEmployees = [];
// for (let i = 0; i < employees.length; i++) {
//   employees[i].salary > 65000 &&
//     employees[i].department.toLocaleUpperCase() === "IT" &&
//     filteredEmployees.push(employees[i]);
// }
// console.log("filteredEmployees" , filteredEmployees);

//Task 6
// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];
// let filteredEmployees = [];
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].department.toLocaleUpperCase() === "HR") {
//     filteredEmployees.push(employees[i]);
//   }
// }
// console.log("filteredEmployees", filteredEmployees);
