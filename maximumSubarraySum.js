function subArray(arr) {
  let maxEnding = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(arr[i], maxEnding + arr[i]); // arr[i] = -3,
    // console.log("Maxending", maxEnding);
    max = Math.max(max, maxEnding);
    // console.log("Max", max);
  }
  return max;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(subArray(arr));
// console.log(arr[0] + arr[2]);
