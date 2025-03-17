// ------------------------------
// Solution
// ------------------------------
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    // If we can reach the current goal from the current position than we can reach the current goal in the future.
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  // If the current goal is the beginning of the array then we can reach the end of the array since we can reach all previous goals.
  return goal === 0;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let nums = [2, 3, 1, 1, 4];
console.log(canJump(nums)); // true

nums = [3, 2, 1, 0, 4];
console.log(canJump(nums)); // false

nums = [1];
console.log(canJump(nums)); // true

nums = [1, 2, 3];
console.log(canJump(nums)); // true

nums = [0, 1];
console.log(canJump(nums)); // false

nums = [0];
console.log(canJump(nums)); // true

nums = [2, 0];
console.log(canJump(nums)); // true

nums = [2, 0, 0];
console.log(canJump(nums)); // true

nums = [3, 0, 8, 2, 0, 0, 1];
console.log(canJump(nums)); // true

nums = [1, 1, 2, 2, 0, 1, 1];
console.log(canJump(nums)); // true

nums = [1, 3, 2];
console.log(canJump(nums)); // true
