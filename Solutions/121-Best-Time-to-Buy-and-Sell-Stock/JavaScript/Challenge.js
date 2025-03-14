// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowestIndex = 0;
  let highestProfit = 0;

  for (let j = 1; j < prices.length; j++) {
    if (prices[j] - prices[lowestIndex] > highestProfit) {
      highestProfit = prices[j] - prices[lowestIndex];
    }
  }
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[lowestIndex]) {
      lowestIndex = i;
      for (let j = i + 1; j < prices.length; j++) {
        if (prices[j] - prices[i] > highestProfit) {
          highestProfit = prices[j] - prices[i];
        }
      }
    }
  }

  return highestProfit;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // 5

prices = prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices)); // 0

prices = [2, 4, 1];
console.log(maxProfit(prices)); // 2

prices = [4, 2, 1, 7];
console.log(maxProfit(prices)); // 6
