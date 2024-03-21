function maxProfit(prices) {
  let profit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    }
    if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
  }
  return profit;
}

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
