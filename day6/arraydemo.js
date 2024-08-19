// x = 100;

// console.log(x); // 100
// let x;

// console.log(x); // undefined

// function Test() {
//   for (var x = 1; x <= 10; x++);
//   document.write(x);
// }

// Test();

const nameList = [
  "Ramya",
  "Lakshmi Priya",
  "Renuka",
  "Varshni",
  "Dinesh",
  "Sanjeev",
  "Akshay",
  "Seeenu",
];

// for (let index = 0; index < nameList.length; index++)
//   document.write(
//     `<h1 style='background-color:blue;color:white'>${nameList[index]}</h1>`
//   );

// for (let index in nameList)
//   document.write(
//     `<h1 style='background-color:blue;color:white'>${nameList[index]}</h1>`
//   );
// nameList.sort();
// nameList.reverse();
// nameList.push("Charan");
// nameList.unshift("Ekshitha");
// nameList.splice(4, 0, "Eshwar", "Rammohan");
// for (let name of nameList)
//   document.write(
//     `<h1 style='background-color:blue;color:white'>${name.toUpperCase()}</h1>`
//   );

// document.write(`Removed element : ${nameList.pop()}`);
// document.write(`<br/>Removed element : ${nameList.shift()}`);
// document.write(`<br/>Removed elements : ${nameList.splice(0, 3)}`);
// nameList.splice(3, 0, "Akshay", "Rammohan");
// for (let name of nameList)
//   document.write(
//     `<h1 style='background-color:blue;color:white'>${name.toUpperCase()}</h1>`
//   );

// document.write(nameList.indexOf("Akshay"));
// document.write(nameList.lastIndexOf("Akshay"));
// document.write(nameList.includes("Sathya"));
// function compare(x, y) {
//   //   return x - y; //Ascending order
//   return y - x; //Descending order
// }

//Another way to compare
// const compare = function (x, y) {
//   return y - x; //Descending order
// };
//Arrow functions
// const compare = (x, y) => x - y;

let arr = [7, 10, 29, 9, 112, 1024, 99];
// arr.sort(compare);
arr.sort((x, y) => x - y);

for (let data of arr) document.write(data + " ");
