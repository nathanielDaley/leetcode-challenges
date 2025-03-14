// ------------------------------
// Solutions
// ------------------------------
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let numsLength = nums.length;
  // If the nums array wouldn't actually rotate return it
  if (numsLength === 1 || numsLength === k || k === 0) {
    return nums;
  }

  // Fixes k's greater than nums length
  k = k % numsLength;

  let indexes = [];
  let index = 0;

  // Store where each number in the array will end up
  // We can probably do this faster and assign to the new array below at the same time.
  for (let i = 0; i < numsLength; i++) {
    index = i - k;
    if (index < 0) {
      index = numsLength + index;
    }
    indexes[i] = index;
  }

  // Place each number in a new array based on the calculated new index from above.
  let newArray = [];
  for (let j = 0; j < numsLength; j++) {
    newArray[j] = nums[indexes[j]];
  }

  // Copy the new array into the nums array so that it changes outside of this function.
  for (let x = 0; x < numsLength; x++) {
    nums[x] = newArray[x];
  }
  nums = newArray;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);
console.log(nums); // [5,6,7,1,2,3,4]

nums = [-1, -100, 3, 99];
k = 2;
rotate(nums, k);
console.log(nums); // [3,99,-1,-100]

nums = [-1, -100, 3, 99];
k = 7;
rotate(nums, k);
console.log(nums); // [-100, 3, 99, -1]
