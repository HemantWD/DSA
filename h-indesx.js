function hIndex(citations) {
  let left = 0;
  let right = citations.length;
  citations.sort((a, b) => b - a);

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (citations[mid] > mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

const citations = [3, 0, 6, 1, 5]; //[6,5,3,1,0]
console.log(hIndex(citations));
