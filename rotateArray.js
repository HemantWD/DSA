function rotate(nums, k) {
  k %= nums.length;

  let reverse = function (i, j) {
    while (i < j) {
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
      i++;
      j--;
    }
  };

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
  return nums;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log(rotate(nums, k));
