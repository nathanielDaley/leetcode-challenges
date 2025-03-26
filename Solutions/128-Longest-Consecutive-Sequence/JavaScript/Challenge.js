// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;

//   const numsSet = new Set(nums);
//   let longestSequenceLength = 0;

//   for (const num of numsSet) {
//     if (!numsSet.has(num - 1)) {
//       let currentSequenceLength = 1;

//       while (numsSet.has(num + currentSequenceLength)) {
//         currentSequenceLength++;
//       }

//       if (currentSequenceLength > longestSequenceLength)
//         longestSequenceLength = currentSequenceLength;
//     }
//   }

//   return longestSequenceLength;
// };

// ------------------------------
// Solution 2
// ------------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const numsSet = new Set(nums);
  let longestSequenceLength = 0;

  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let currentSequenceLength = 1;

      while (numsSet.has(num + currentSequenceLength)) {
        currentSequenceLength++;
      }

      longestSequenceLength = Math.max(
        currentSequenceLength,
        longestSequenceLength
      );
    }
  }

  return longestSequenceLength;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // 4

nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums)); // 9

nums = [1, 0, 1, 2];
console.log(longestConsecutive(nums)); // 3
