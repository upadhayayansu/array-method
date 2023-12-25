// let favouriteNumber = 1;
// console.log(favouriteNumber)
// favouriteNumber = 2;
// console.log(favouriteNumber);

// let a = 1; //number
// let b = 2;
// let c = 3;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log((1 + 2) * 3);
// console.log(3.4 * 3.4);

// let a = "hello";   //string
// let b = "world";
// console.log(a + b);

// let name = "ansu";   //boolean
// console.log("hello my name is " + name);

// let happy = true;
// console.log(!happy);

// let a = null;
// console.log(a);

// let a = 1;
// let b = 2;
// console.log(a !== b);

// let a = null;
// let b = null;
// console.log(a !== b);

// function sayName() {
//   console.log("ansu");
// }
// sayName();

// function sum(a, b) {
//   return a + b;
// }
// let s = sum(1, 2);
// console.log(s);

// function sum(a, b) {
//   return a - b;
// }
// let s = sum(5, 2);
// let sum2 = sum(5, s);
// console.log(sum2);

// let name = "ansu";
// console.log("hello " + "ansu");

function sumCallback(a, b, callback) {
  callback(a + b);
}
function handleSum(sum) {
  console.log(sum);
}
sumCallback(1, 2, handleSum);

