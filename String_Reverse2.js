const prompt = require("prompt-sync")({ sigint: true });
let input = prompt("Enter the string   ");
let inputArray = input.split("");
for (
  [arrayStart, arrayEnd] = [0, inputArray.length - 1];
  arrayStart < arrayEnd;
  arrayStart++, arrayEnd--
)
  [inputArray[arrayStart], inputArray[arrayEnd]] = [
    inputArray[arrayEnd],
    inputArray[arrayStart],
  ];

let reversedString = inputArray.toString().replaceAll(",", "");
input = reversedString;
console.log(input);
