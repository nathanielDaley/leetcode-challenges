// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     let secondNumIndex = nums.indexOf(target - nums[i], i + 1);
//     if (secondNumIndex !== -1) {
//       return [i, secondNumIndex];
//     }
//   }
// };

// ------------------------------
// Solution 2
// ------------------------------
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numLocationMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in numLocationMap) {
      return [numLocationMap[target - nums[i]], i];
    } else {
      numLocationMap[nums[i]] = i;
    }
  }
};

// ------------------------------------------
// Tests
// ------------------------------------------

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target)); // [0,1]

nums = [3, 2, 4];
target = 6;
console.log(twoSum(nums, target)); // [1,2]

nums = nums = [3, 3];
target = 6;
console.log(twoSum(nums, target)); // [0,1]
