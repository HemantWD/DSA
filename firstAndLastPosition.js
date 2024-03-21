function search(arr, target) {
  function binarySearch(nums, target, isFirst) {
    let start = 0;
    let end = nums.length - 1;
    let result = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        result = mid;
        if (isFirst) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return result;
  }

  const firstIndex = binarySearch(arr, target, true);
  if (firstIndex === -1) {
    return [-1, -1];
  }

  const lastIndex = binarySearch(arr, target, false);
  return [firstIndex, lastIndex];
}

const arr = [5, 7, 7, 8, 8, 10],
  target = 8;

console.log(search(arr, target));
