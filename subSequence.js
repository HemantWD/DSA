function isSubSequence(s, t) {
  let set = new Set(s);
  for (const val of set) {
    if (!t.includes(val)) {
      return false;
    }
  }
  return true;
}

const s = "abc",
  t = "ahbgdc";
console.log(isSubSequence(s, t));
