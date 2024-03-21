function reverse(nums) {
  let isNegative = nums < 0;
  let absNum = Math.abs(nums);
  let reve = 0;
  while (absNum !== 0) {
    reve = reve * 10 + (absNum % 10);
    absNum = Math.floor(absNum / 10);
  }
  if (isNegative) {
    reve *= -1;
  }
  return reve;
}
const nums = 1234;
console.log(reverse(nums));
