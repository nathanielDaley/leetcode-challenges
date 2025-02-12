/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};

// Tests
// --------------------
// Test 1
let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) {
  return accum + curr;
};
let init = 0;

console.log(reduce(nums, fn, init));

// Test 2
nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + curr * curr;
};
init = 100;

console.log(reduce(nums, fn, init));

// Test 3
nums = [];
fn = function sum(accum, curr) {
  return 0;
};
init = 25;

console.log(reduce(nums, fn, init));
