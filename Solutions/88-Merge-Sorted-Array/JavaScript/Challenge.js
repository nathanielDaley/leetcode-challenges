// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   for (let i = 0; i < n; i++) {
//     nums1[m + i] = nums2[i];
//   }

//   nums1.sort((a, b) => a - b);
// };
// ------------------------------
// Solution 2
// ------------------------------
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, validNumsInNums1, nums2, nums2Length) {
  let lastNums1Index = validNumsInNums1 + nums2Length - 1;

  while (validNumsInNums1 > 0 && nums2Length > 0) {
    if (nums1[validNumsInNums1 - 1] > nums2[nums2Length - 1]) {
      nums1[lastNums1Index] = nums1[validNumsInNums1 - 1];
      validNumsInNums1 -= 1;
    } else {
      nums1[lastNums1Index] = nums2[nums2Length - 1];
      nums2Length -= 1;
    }
    lastNums1Index -= 1;
  }

  while (nums2Length > 0) {
    nums1[lastNums1Index] = nums2[nums2Length - 1];
    lastNums1Index -= 1;
    nums2Length -= 1;
  }
};

// ------------------------------------------
// Tests
// ------------------------------------------

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // [1,2,2,3,5,6]

(nums1 = [1]), (m = 1), (nums2 = []), (n = 0);

merge(nums1, m, nums2, n);
console.log(nums1); // [1]

(nums1 = [0]), (m = 0), (nums2 = [1]), (n = 1);

merge(nums1, m, nums2, n);
console.log(nums1); // [1]
