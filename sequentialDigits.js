function sequentialDigits(low, high) {
  let arr = [];
  for (let i = 1; i <= 9; i++) {
    let num = i;
    let nextDigit = i + 1;
    while (num <= high && nextDigit <= 9) {
      num = num * 10 + nextDigit;

      if (low <= num && num <= high) {
        arr.push(num);
      }
      ++nextDigit;
    }
  }
  return arr.sort((a, b) => a - b);
}

const low = 100,
  high = 300;
console.log(sequentialDigits(low, high));
