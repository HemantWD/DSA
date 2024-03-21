function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
}

const arr = [2, 7, 11, 15];
console.log(twoSum(arr, 9));
