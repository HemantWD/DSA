// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majority(nums) {
  let count = 0;
  let element = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      element = nums[i];
      count = 1;
    } else if (element === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return element;
}

const nums = [3, 3, 4, 2, 4, 4, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2];
console.log(majority(nums));
