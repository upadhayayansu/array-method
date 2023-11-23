const numbers = [1, 2, 3, 4, 5, 6];
function odd(x) {
  return x % 2;
}
const output = numbers.filter(odd);
console.log(output);
