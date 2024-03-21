function palindrome(x) {
  let reversed = 0;
  let original = x;
  while (original > 0) {
    const digits = original % 10;
    reversed = reversed * 10 + digits;
    original = Math.floor(original / 10);
  }
  return reversed === x;
}
const x = 121;
console.log(palindrome(x));
