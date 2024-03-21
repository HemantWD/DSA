function subArrayProduct(arr) {
  let maxEnding = arr[0];
  let minEnding = arr[0];
  let maxSoFar = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const tmp = maxEnding;
    maxEnding = Math.max(
      arr[i],
      Math.max(arr[i] * maxEnding, arr[i] * minEnding)
    );
    minEnding = Math.min(arr[i], Math.min(arr[i] * tmp, arr[i] * minEnding));
    maxSoFar = Math.max(maxSoFar, maxEnding);
  }
  return maxSoFar;
}

const arr = [6, -3, -10, 0, 2];
console.log(subArrayProduct(arr));
