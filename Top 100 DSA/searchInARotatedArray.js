function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const arr = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log(search(arr, target));
