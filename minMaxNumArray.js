let arr = [12, 4, 6, 7, 9, 0, 666, 33, 22, 124, 555];
const min = (arr) => {
  let min = arr[0];
  for (value of arr) {
    if (value < min) {
      min = value;
    }
  }
  return min;
};

const max = (arr) => {
  let max = arr[0];
  for (value of arr) {
    if (value > max) {
      max = value;
    }
  }
  return max;
};
console.log(arr);
console.log(min(arr));
console.log(max(arr));
