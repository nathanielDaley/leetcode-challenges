// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function (nums) {
//   let numsMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!numsMap[nums[i]]) {
//       numsMap[nums[i]] = true;
//     } else {
//       return true;
//     }
//   }

//   return false;
// };

// ------------------------------
// Solution 2
// ------------------------------
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numsSet = new Set(nums);

  return numsSet.size !== nums.length;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums)); // true

nums = nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums)); // false

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums)); // true
