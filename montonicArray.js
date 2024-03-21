function monotonic(arr) {
  let increase = true;
  let decrease = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      decrease = false;
    } else if (arr[i] > arr[i - 1]) {
      increase = false;
    }
    if (!increase && !decrease) {
      return false;
    }
  }
  return true;
}

const arr = [1, 2, 4, 8, 5];
console.log(monotonic(arr));
