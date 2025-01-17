function sortedArray(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid % 2 === 1) {
      mid--;
    }
    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(sortedArray(nums));
