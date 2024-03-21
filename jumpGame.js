function jumpGame(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max <= i && arr[i] === 0) {
      return false;
    }
    if (i + arr[i] >= max) {
      max = i + arr[i];
    }
    if (max >= arr.length - 1) {
      return true;
    }
  }
  return false;
}

const arr = [2, 3, 1, 1, 4];
console.log(jumpGame(arr));
