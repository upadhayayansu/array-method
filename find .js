const numbers = [1, 2, 3, 4, 5];
const res = numbers.findIndex(findFive);
function findFive(value) {
  return value === 5;
}
console.log(res);
