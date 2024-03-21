function palindrome(list1, list2) {
  for (let i = list1.length, j = 0; j < list2.length; i++, j++) {
    list1[i] = list2[j];
  }
  return list1.sort((a, b) => a - b);
}

const list1 = [1, 2, 4],
  list2 = [1, 3, 4];
console.log(palindrome(list1, list2));
