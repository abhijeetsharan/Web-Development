// const arr = [1,2,3,4,5];
// console.log(arr);

// const arr1 = new Array(1,2,3,4,5);
// console.log(arr1);
// // console.log(arr1.length);

// arr1.push(6);
// console.log(arr1);

// arr1.pop(4);
// console.log(arr1);

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array){
  return value > 18;
}
console.log(first);