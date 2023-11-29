const arr = [1, 2, 3, 4, 5];
const res = arr.findIndex(findThree);
function findThree(value) {
  return value === 3;
}
console.log(res);
