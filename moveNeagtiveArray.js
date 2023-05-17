const inputArr = [1, -2, -3];
let negIndex = inputArr.length - 1;
const moveNegativeELementsToRight = (inputArr) => {
  for (let positiveIndex in inputArr)
    if (inputArr[positiveIndex] < 0) {
      for (; negIndex > positiveIndex; negIndex--) {
        if (inputArr[negIndex] > 0) {
          const storeValue = inputArr[positiveIndex];
          inputArr[positiveIndex] = inputArr[negIndex];
          inputArr[negIndex] = storeValue;
        }
      }
    }
};

moveNegativeELementsToRight(inputArr);
console.log(inputArr);
