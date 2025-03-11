// ------------------------------
// Solution
// ------------------------------
// Solution 1
// ------------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   let uniqueCounts = new Map();
//   let uniqueCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (!uniqueCounts[nums[i]]) {
//       uniqueCounts[nums[i]] = 1;
//       nums[uniqueCount++] = nums[i];
//     } else if (uniqueCounts[nums[i]] !== 2) {
//       uniqueCounts[nums[i]] = 2;
//       nums[uniqueCount++] = nums[i];
//     }
//   }

//   return uniqueCount;
// };

// ------------------------------
// Solution 2
// ------------------------------
var removeDuplicates = function (nums) {
  // This will hold a count of each value of nums as a key and the count of that value as it's value
  let uniqueCounts = new Map();

  // We don't need to check the first element. Set the unique count to 1.
  let uniqueCount = 1;

  // Set the map's first key to the first value in the array and set it's value to 1.
  uniqueCounts[nums[0]] = 1;

  // Loop over the entire input array except for the first value.
  for (let i = 1; i < nums.length; i++) {
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
