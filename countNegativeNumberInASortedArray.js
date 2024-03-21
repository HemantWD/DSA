function countNegative(grid) {
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;

  for (let i = 0; i < row; i++) {
    let left = 0;
    let right = col - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (grid[i][mid] < 0) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    count += col - left;
  }
  return count;
}

const arr = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

console.log(countNegative(arr));
