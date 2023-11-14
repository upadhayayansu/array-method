const numbers = [1, 2, 3, 4, 5];
let count = {};

numbers.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});
console.log(count);
