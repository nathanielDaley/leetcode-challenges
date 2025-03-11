// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   uniqueArray = [];
//   uniqueCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (!uniqueArray.includes(nums[i])) {
//       uniqueArray.push(nums[i]);
//       nums[uniqueCount++] = nums[i];
//     }
//   }

//   return uniqueCount;
// };

// ------------------------------
// Solution 2
// ------------------------------
var removeDuplicates = function (nums) {
  uniqueCount = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueCount]) {
      nums[++uniqueCount] = nums[i];
    }
  }

  return ++uniqueCount;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let nums = [1, 1, 2];
console.log(removeDuplicates(nums), nums);

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums), nums);
