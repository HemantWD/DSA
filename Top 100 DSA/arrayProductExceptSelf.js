function productArray(arr) {
  let n = arr.length;
  let result = new Array(n).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 0; i < n; i++) {
    result[i] = left;
    left *= arr[i];
  }
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right *= arr[i];
  }
  return result;
}

const arr = [10, 3, 5, 6, 2];
console.log(productArray(arr));
