// ------------------------------
// Solutions
// ------------------------------
// Solution 1 too slow
// ------------------------------
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   let threeSumMap = new Map();

//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           let threeSumArray = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
//           threeSumMap.set(`${threeSumArray}`, threeSumArray);
//         }
//       }
//     }
//   }

//   let returnArray = [];
//   for (const value of threeSumMap.values()) {
//     returnArray.push(value);
//   }

//   return returnArray;
// };
// ------------------------------
// Solution 2 - still too slow
// ------------------------------
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   nums.sort((a, b) => a - b);
//   let threeSumSet = new Set();

//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           threeSumSet.add(JSON.stringify([nums[i], nums[j], nums[k]]));
//         }
//       }
//     }
//   }

//   return Array.from(threeSumSet).map((item) => JSON.parse(item));
// };
// ------------------------------
// Solution 3
// ------------------------------
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const returnArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        returnArray.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      }
    }
  }
  return returnArray;
};

// ------------------------------------------
// Tests
// ------------------------------------------

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // [[-1,-1,2],[-1,0,1]]

nums = [0, 1, 1];
console.log(threeSum(nums)); // []

nums = [0, 0, 0];
console.log(threeSum(nums)); // [[0,0,0]]

nums = [-2, -1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // [[-1,-1,2],[-1,0,1]]
