// ------------------------------
// Solutions
// ------------------------------
// Solution 1 - way too complicated and in the end doesn't actually work for all use cases
// ------------------------------
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   let totalProfit = 0;
//   let profits = new Map();

//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let profit = prices[j] - prices[i];
//       let distance = j - i;
//       if (profit > 0) {
//         if (!profits[i]) {
//           profits[i] = [new Map([[profit, distance]])];
//         } else {
//           profits[i].push(new Map([[profit, distance]]));
//         }
//       }
//     }
//   }

//   for (const [key, value] of Object.entries(profits)) {
//     let profit = 0;
//     let ratio = 2;
//     for (let i = 0; i < value.length; i++) {
//       for (const [key2, value2] of value[i]) {
//         if (value2 / key2 < ratio) {
//           ratio = value2 / key2;
//           profit = key2;
//         }
//       }
//     }
//     totalProfit += profit;
//   }

//   return totalProfit;
// };
// ------------------------------
// Solution 2
// ------------------------------
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let totalProfit = 0;
  let pricesLength = prices.length;
  for (let i = 1; i < pricesLength; i++) {
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }

  return totalProfit;
};
// ------------------------------------------
// Tests
// ------------------------------------------
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // 7

prices = prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices)); // 4

prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices)); // 0

prices = [6, 1, 3, 2, 4, 7];
console.log(maxProfit(prices)); // 7
