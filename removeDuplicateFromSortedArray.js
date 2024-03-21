function removeElement(nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let k = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2] || nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

const nums = [1, 1, 1, 2, 2, 3];
console.log(removeElement(nums));
