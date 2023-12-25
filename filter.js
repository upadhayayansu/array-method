// const people = [
//   {
//     name: "Ram",
//     age: 26,
//   },
//   {
//     name: "Shyam",
//     age: 18,
//   },
//   {
//     name: "Sita",
//     age: 15,
//   },
// ];
// const adults = people.filter((person) => person.age >= 18);
// console.log(adults);

// const numbers = [1, 2, 3, 4];
// const even = numbers.filter(isEven);
// function isEven(value) {
//   return value % 2 === 0;
// }
// console.log(even);

// const numbers = [1, 2, 3, 4, 5];
// const odd = numbers.filter(isOdd);
// function isOdd(value) {
//   return value % 2;
// }
// console.log(odd);

// const numbers = [1, 2];
// const odd = numbers.filter(isOdd);
// function isOdd(value) {
//   return value % 2;
// }
// console.log(odd);

// let p = new Promise((esolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });
// p.then((message) => {
//   console.log("This is in the then") + message;
// }).catch((message) => {
//   console.log("This is the catch" + message);
// })

// const count = true;
// let countValue = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("There is a count value");
//   } else {
//     reject("There is no count value");
//   }
// });
// console.log(countValue);

// let countValue = new Promise(function (resolve, reject) {
//   reject("promise rejected");
// });
// countValue
//   .then(function successValue(result) {
//     console.log(result);
//   })
//   .catch(function errorValue(result) {
//     console.log(result);
//   });

// export default class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// export function printName(user) {    //es6
//   console.log("users name is ${user.age}");
// }
// export function printAge(user) {
//   console.log("user is ${user.age}years old");
// }

// let i = 10;
// console.log(i);
// const pi = 3.14;
// console.log(pi);

// const sumConst = (a, b) => a + b;
// console.log("sumFun(1,2)=>$(sumFunc(1,2)}");
// console.log("sumFun(3,4)=>$(sumFunc(3,4)}");

// function sumFunc(a, b) {
//   return a + b;
// }

// console.log(a);
// a = 2;

const users = {
  name: "ram",
  age: 18,
  location: "surkhet",
};
console.log(users);


