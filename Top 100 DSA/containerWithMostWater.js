function maxWater(arr) {
  let maxArea = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const minArea = Math.min(arr[left], arr[right]);
    const width = right - left;
    const area = width * minArea``;
    maxArea = Math.max(maxArea, area);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

const arr = [1, 5, 4, 3];
console.log(maxWater(arr));
