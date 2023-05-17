import arraysEqual from "./arrayEqual.js";
console.log(typeof arraysEqual);
const arr = [1, 0, 1, 0, 0];
const [...unsortedArray] = arr;
const arraySorting = (arrNew) => {
  for (let currentIndex in arrNew) {
    if (arrNew[currentIndex]) {
      let nextIndex = parseInt(currentIndex) + 1;
      for (; nextIndex < arrNew.length; nextIndex++) {
        if (!arrNew[nextIndex]) {
          arrNew[nextIndex] = 1;
          arrNew[currentIndex] = 0;
          break;
        }
      }
    }
  }
};
arraySorting(arr);
arraysEqual(unsortedArray, arr)
  ? console.log("Arrays are already sorted")
  : console.log(arr);
