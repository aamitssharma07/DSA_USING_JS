// ******************************************************
// Iterative Function
// ******************************************************

// let factorial = (value) => {
//   if (value > 0) {
//     let fact = 1;
//     for (; value > 0; value--) {
//       fact *= value;
//     }
//     return fact;
//   } else if (value === 0) {
//     return 1;
//   } else return "Factorial of negative number doesn't exist";
// };

// ******************************************************
// Recursive Function
// ******************************************************

function factorial(value) {
  if (value > 0) {
    return value * factorial(value - 1);
  } else if (value === 0) return 1;
  else return "Factorial of negative number doesn't exist";
}

console.log(factorial(-2));
