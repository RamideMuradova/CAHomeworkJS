//TASK 1
// let number = 245;
// let first = number % 10;
// let second = ((number - first) / 10) % 10;
// let third = ((number - first) / 10 - second) / 10;

// sum = third + second + first;
// multiply = third * second * first;
// average = parseInt((first + second + third) / 3);

// console.log(`SUM: ${sum}, MULTIPLY: ${multiply}, AVERAGE: ${avarage}`);

// //TASK 2
// let num = 26;
// for (let i = 0; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }

// //TASK 3
// let count = 0;
// for (let i = 0; i <= num; i++) {
//   if (num % i === 0) {
//     count++;
//   }
// }
// console.log(count);

// //TASK 4
// //0 x 0 = 0
// //  1 x 1 = 1
// //  2 x 2 = 4
// //  3 x 3 = 9
// //  4 x 4 = 16
// //  5 x 5 = 25
// //  6 x 6 = 36
// //  7 x 7 = 49
// //  8 x 8 = 64
// //  9 x 9 = 81
// //  10 x 10 = 100

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }

// //TASK 5
// //  i    i^2   i^3
// //  0    0     0
// //  1    1     1
// //  2    4     8
// //  3    9     27
// //  4    16    64
// //  5    25    125
// //  6    36    216
// //  7    49    343
// //  8    64    512
// //  9    81    729
// //  10   100   1000

// console.log(`i i^2 i^3`);
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${i ** 2} ${i ** 3}`);
// }

// //TASK 6
// let isPrime = true;
// let primeNumber = 5;
// for (let i = 0; i < primeNumber; i++) {
//   if (primeNumber % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime === true) {
//   console.log(`${primeNumber} is prime`);
// } else {
//   console.log(`${primeNumber} is not prime`);
// }

// //TASK 7
// let odd = 0;
// let even = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }

// console.log("ODD: ", odd);
// console.log("EVEN: ", even);
