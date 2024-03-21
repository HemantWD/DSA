// Method 1
// function intersectionOfTwoArray(nums1, nums2) {
//   const set = new Set();
//   const res = new Set();
//   for (const num of nums1) {
//     set.add(num);
//   }
//   for (const num of nums2) {
//     set.has(num) && res.add(num);
//   }
//   return res;
// }

// Method 2
function intersectionOfTwoArray(nums1, nums2) {
  const set = new Set(nums1);
  const res = new Set(nums2);
  const arr = [];
  for (const num of res) {
    if (set.has(num)) {
      arr.push(num);
    }
  }
  return arr;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersectionOfTwoArray(nums1, nums2));
