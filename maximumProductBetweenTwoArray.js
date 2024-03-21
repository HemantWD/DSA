function maximumProduct(nums) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }
  return (largest - 1) * (secondLargest - 1);
  //   return [largest, secondLargest];
}

// * Method 2

// var maxProduct = function (nums) {
//   let max = 0
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//           const product = (nums[i] - 1) * (nums[j] - 1)
//           if (product >= max) {
//               max = product
//           }
//       }
//   }
//   return max
// };

const nums = [10, 2, 5, 2];
console.log(maximumProduct(nums));
