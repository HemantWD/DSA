function lengthStr(str) {
  let reversedStr = "";
  let word = "";
  let inWord = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
      inWord = true;
    } else {
      if (inWord) {
        reversedStr = word + " " + reversedStr;

        word = "";
        inWord = false;
      }
    }
  }
  if (word.length > 0) {
    reversedStr = word + " " + reversedStr;
  }
  return reversedStr.trim();
}

const str = "a good   example";
console.log(lengthStr(str));
