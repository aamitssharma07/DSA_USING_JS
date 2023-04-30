const givenArray1 = [12, 45, 78, "Amit", 19];
const givenArray2 = [12, 45, 78, "Amit", 19];

function compareArray(givenArray1, givenArray2) {
  if (givenArray1.length !== givenArray2.length) return "Arrays are not equal";
  else if (givenArray1.length < givenArray2.length) {
    for (x in givenArray1) {
      if (givenArray1[x] === givenArray2[x]);
      else return `Arrays are not equal`;
    }
    return "Arrays are equal";
  } else {
    for (x in givenArray2) {
      if (givenArray2[x] === givenArray1[x]);
      else return `Arrays are not equal`;
    }
    return "Arrays are equal";
  }
}

console.log(compareArray(givenArray1, givenArray2));
