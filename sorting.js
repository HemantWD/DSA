let arr = [40, 30, 12, 25, 12];
let tmp;

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
}
console.log(arr);
