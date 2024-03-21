// function apple(x) {
//   console.log(x);
//   if (x < 10) {
//     apple(x + 1);
//   }
// }

// apple(0);

function factorial(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));
