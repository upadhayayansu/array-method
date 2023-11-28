let arr1 = [1, 2, 3];
arr1.push(4);
let arr2 = arr1;
arr2.push(5);
let arr3 = [...arr1];
arr3.push(6);

console.log(arr1, arr2, arr3);
