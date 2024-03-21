function duplicates(arr) {
  let count = {};
  let result = [];
  for (const element of arr) {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  }
  for (const key in count) {
    if (count[key] > 1) {
      result.push(parseInt(key));
    }
  }
  return result;
}

const arr = [1, 2, 3, 6, 3, 6, 1];
console.log(duplicates(arr));
