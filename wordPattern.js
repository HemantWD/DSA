function wordPattern(pattern, s) {
  let words = s.split(" ");

  let obj = {};
  for (let i = 0; i < words.length; i++) {
    if (obj[pattern[i]] && obj[pattern[i]] !== words[i]) {
      return false;
    }
    obj[pattern[i]] = words[i];
  }
  return new Set(Object.values(obj)).size === Object.values(obj).length;
}

const pattern = "abba",
  s = "dog cat cat dog";
console.log(wordPattern(pattern, s));
