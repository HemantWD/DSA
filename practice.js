function reverse(arr) {
  let str = arr.trim().replace(/\s+/g, " ").split(" ");
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    let tmp = str[left];
    str[left] = str[right];
    str[right] = tmp;
    left++;
    right--;
  }
  return str.join(" ");
}

const arr = "hello    world  ";
console.log(reverse(arr));
