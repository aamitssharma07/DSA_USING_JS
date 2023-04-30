const prompt = require("prompt-sync")({ sigint: true });
const input = parseInt(prompt("Enter the number   "));
const givenArray = [12, 45, 78, 2, 9, 13];
function numberPresent(value) {
  for (x of givenArray) {
    if (x === input) {
      return "Number is present";
    }
    x++;
  }
  return " Number is not present in the given array";
}

console.log(numberPresent(input));
