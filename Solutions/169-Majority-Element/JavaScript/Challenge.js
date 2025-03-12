// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function (nums) {
//   let numsCountMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (!numsCountMap[nums[i]]) {
//       numsCountMap[nums[i]] = 1;
//     } else {
//       numsCountMap[nums[i]] = numsCountMap[nums[i]] + 1;
//     }
//     if (numsCountMap[nums[i]] >= nums.length / 2) {
//       return nums[i];
//     }
//   }
// };

// ------------------------------
// Solution 2
// ------------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = (nums) => {
  let majorElement = 0,
    majorityCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (majorityCount == 0) majorElement = nums[i];

    if (majorElement == nums[i]) {
      majorityCount++;
    } else {
      majorityCount--;
    }
  }

  return majorElement;
};

let nums = [3, 2, 3];
console.log(majorityElement(nums)); // 2

nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums)); // 2
