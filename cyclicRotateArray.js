let arr = [12, 4, 5, 7, 9];
let storeValue = arr[0];

const clockWiseRotateArray = (arr) => {
  for (x = 0; x < arr.length; x++) {
    arr[x] = arr[x + 1];
  }
  arr[x - 1] = storeValue;
};

let storeValue1 = arr[arr.length - 1];
const antiClockWiseRotateArray = (arr) => {
  for (x = arr.length - 1; x >= 0; x--) {
    arr[x] = arr[x - 1];
  }
  arr[x + 1] = storeValue1;
};
console.log(arr);
// clockWiseRotateArray(arr);
// console.log(arr);
antiClockWiseRotateArray(arr);

console.log(arr);

// while (arr.length !== 1) {
//   newArray.push(arr.splice(1, 1).pop());
// }
// newArray.push(arr.pop());
// arr = newArray;
// console.log(arr);
