function checkMissingElemenet(AP, d, a) {
  for (x = 1; x < AP.length; x++) {
    if (AP[x] === a + x * d);
    else return `Element missing from AP ${AP} is  ${a + x * d} at ${x} index`;
  }
  return `Given AP ${AP} has no missing elements`;
}

console.log(checkMissingElemenet([1, 3, 5, 7, 9], 2, 1));
