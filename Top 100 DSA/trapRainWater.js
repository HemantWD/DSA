function trapWater(arr) {
  let water = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let left = arr[i];
    for (let j = 0; j < i; j++) {
      left = Math.max(left, arr[j]);
    }
    let right = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      right = Math.max(right, arr[k]);
    }
    water += Math.min(left, right) - arr[i];
  }
  return water;
}

const arr = [3, 0, 2, 0, 4];
console.log(trapWater(arr));
