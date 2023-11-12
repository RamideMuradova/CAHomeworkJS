let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];
//TASK 1
// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
// let result = arr.filter((item, i) => {
//   return item.name[0].toLocaleLowerCase() === "t";
// });

// console.log(result);

//TASK 2
//2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
// let count = 0;
// let result = arr.forEach((item, i) => {
//   if (
//     item.name[0].toLocaleLowerCase() === "t" &&
//     item.name[item.name.length - 1].toLocaleLowerCase() === "t"
//   ) {
//     count++;
//     console.log(item);
//   }
// });

// console.log(result);

//TASK 3

//3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// let result = arr.filter((item, i) => {
//   return (
//     item.name[0].toLocaleLowerCase() === "t" &&
//     item.name[item.name.length - 1].toLocaleLowerCase() === "t"
//   );
// });
// console.log(result);
// let sum = 0;
// let result =[
//     { name: 'test', key: 1 },
//     { name: 'trust', key: 6 },
//     { name: 'test', key: 7 }
//   ]
// result.forEach((item,i,array)=> {
//     sum += item.key;
// });
// console.log("sum:" ,sum);

//TASK 4

//4) "name"-i "e" herfi ile biten obyektlerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// let result =arr.filter((item,i)=> {
//     if (item.name[item.name.length-1].toLocaleLowerCase() === "e") {
//         item.name = "SuperDev"
//         return item.name
//     }
// });
// console.log(result);

//TASK 5

//5) "name"-i en uzun olan obyekti tapin

// let max = arr[0].name.length;
// let maxIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i].name.length > max) {
//     max = arr[i].name.length;
//     maxIndex = i;
//   }
// }
// console.log(arr[maxIndex]);

//TASK 12

//12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

// let result = arr.filter((item,i)=>item.key >10 && item.name[0].toLocaleLowerCase() === "l" )
// console.log(result);

//TASK 8

//8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)

// let result = arr.filter((item,i)=>item.name.length === 4)
// console.log(result);

//TASK 9

//9)  en boyuk "key" - i olan obyektin "name"-i ni tapin

// console.log(arr.find((item)=>item.name === "little"));

// let max = arr[0].key;
// let maxIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i].key > max) {
//     max = arr[i].key;
//     maxIndex = i;
//   }
// }
// console.log(arr[maxIndex]);

//TASK 6

//) "name"-i en uzun olan obyektin key'ni tapin

// let max = arr[0].name.length;
// let maxIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i].name.length > max) {
//     max = arr[i].name.length;
//     maxIndex = i;
//   }
// }
// console.log(arr[maxIndex].key);

//TASK 7

//7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// let max = arr[0].name.length;
// let maxIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i].name.length > max) {
//     max = arr[i].name.length;
//     maxIndex = i;
//   }
// }
// console.log([maxIndex]**2);


