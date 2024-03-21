function kidsWithCandies(candies, extraCandies) {
  let max = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] >= max) {
      max = candies[i];
    }
  }

  let result = [];

  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= max);
  }
  return result;
}

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
