const prompt = require("prompt-sync")({ sigint: true });
let input = prompt("Enter the string   ");
function reverseString(input) {
  let reverseArray = [];
  for (x = input.length - 1; x >= 0; x--) {
    reverseArray.push(input[x]);
  }

  return (input = reverseArray.toString().replaceAll(",", ""));
}

console.log(reverseString(input));
