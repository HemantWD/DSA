function shuffleString(s, indices) {
  // let result = "";
  // if (s.length !== indices.length) {
  //   return false;
  // }
  // for (let i = 0; i < s.length; i++) {
  //   result += s[indices.indexOf(i)];
  // }
  // return result;
  let arr = [];
  let str = "";
  if (s.length !== indices.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    arr[indices[i]] = s[i];
    console.log(arr);
  }
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    console.log(str);
  }
  return str;
}

const s = "codeleet",
  indices = [4, 5, 6, 7, 0, 2, 1, 3];
console.log(shuffleString(s, indices));
