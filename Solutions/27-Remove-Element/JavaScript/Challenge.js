/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let numMatches = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[numMatches] = nums[i];
      numMatches++;
    }
  }

  return numMatches;
};

let nums = [3, 2, 2, 3],
  val = 3;
console.log(removeElement(nums, val), nums);
