// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function (nums, k) {
//   let numsMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (!numsMap.get(nums[i])) {
//       numsMap.set(nums[i], 1);
//     } else {
//       numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
//     }
//   }

//   let topNums = Array.from(numsMap.entries())
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map((entry) => entry[0]);

//   return topNums;
// };

// ------------------------------
// Solution 2
// ------------------------------
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function (nums, k) {
//   let numsMap = new Map();

//   for (const num of nums) {
//     if (numsMap.has(num)) {
//       numsMap.set(num, numsMap.get(num) + 1);
//     } else {
//       numsMap.set(num, 1);
//     }
//   }

//   let topNums = Array.from(numsMap.entries())
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map((entry) => entry[0]);

//   return topNums;
// };
// ------------------------------
// Solution 3 neetcode - slower than 4
// ------------------------------
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function (nums, k) {
//   const count = {};
//   for (const num of nums) {
//     count[num] = (count[num] || 0) + 1;
//   }

//   const arr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)]);
//   arr.sort((a, b) => b[0] - a[0]);

//   return arr.slice(0, k).map((pair) => pair[1]);
// };
// ------------------------------
// Solution 4 fastest
// ------------------------------
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!numsMap.has(num)) {
      numsMap.set(num, 1);
    } else {
      numsMap.set(num, numsMap.get(num) + 1);
    }
  }

  let topNums = Array.from(numsMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((entry) => entry[0]);

  return topNums;
};

// ------------------------------------------
// Tests
// ------------------------------------------

let nums = [1, 1, 1, 2, 2, 3];
let k = 2;
console.log(topKFrequent(nums, k)); // [1,2]

nums = [1, 1, 1, 2, 3, 3];
k = 2;
console.log(topKFrequent(nums, k)); // [1,3]

nums = [1];
k = 1;
console.log(topKFrequent(nums, k)); // [1]
