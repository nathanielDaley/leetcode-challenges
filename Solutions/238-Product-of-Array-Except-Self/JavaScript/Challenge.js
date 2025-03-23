// ------------------------------
// Solutions
// ------------------------------
// Solution 1 too slow
// ------------------------------
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {
//   let productsArray = [];

//   for (let i = 0; i < nums.length; i++) {
//     productsArray.push(1);
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         productsArray[i] *= nums[j];
//       }
//     }
//   }

//   return productsArray;
// };

// ------------------------------
// Solution 2
// ------------------------------
var productExceptSelf = function (nums) {
  const productsArray = Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    productsArray[i] *= left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    productsArray[i] *= right;
    right *= nums[i];
  }

  return productsArray;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // [24,12,8,6]

nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums)); // [0,0,9,0,0]
