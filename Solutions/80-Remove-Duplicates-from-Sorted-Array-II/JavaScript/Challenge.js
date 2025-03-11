// ------------------------------
// Solution
// ------------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let uniqueCounts = new Map();
  let uniqueCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!uniqueCounts[nums[i]]) {
      uniqueCounts[nums[i]] = 1;
      nums[uniqueCount++] = nums[i];
    } else if (uniqueCounts[nums[i]] !== 2) {
      uniqueCounts[nums[i]] = 2;
      nums[uniqueCount++] = nums[i];
    }
  }

  return uniqueCount;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums), nums); // 5, nums = [1,1,2,2,3,_]

nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums), nums); // 7, nums = [0,0,1,1,2,3,3,_,_]
