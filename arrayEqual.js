const givenArray1 = [12, 45, 78, "Amit", 19];
const givenArray2 = [12, 45, 72, "Amit", 19, 28];

export default function arraysEqual(givenArray1, givenArray2) {
  if (givenArray1.length !== givenArray2.length) return false;
  else if (givenArray1.length < givenArray2.length) {
    for (let x in givenArray1) {
      if (givenArray1[x] === givenArray2[x]);
      else return false;
    }
    return true;
  } else {
    for (let x in givenArray2) {
      if (givenArray2[x] === givenArray1[x]);
      else return false;
    }
    return true;
  }
}

console.log(
  "Are two arrays equal?",
  arraysEqual([1, 0, 1, 0, 0], [1, 0, 1, 0, 0])
);
