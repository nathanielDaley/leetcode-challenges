// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let leftindex = 0;
  let rightIndex = height.length - 1;

  while (leftindex < rightIndex) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[leftindex], height[rightIndex]) * (rightIndex - leftindex)
    );

    height[leftindex] <= height[rightIndex] ? leftindex++ : rightIndex--;
  }

  return maxArea;
};

// ------------------------------------------
// Tests
// ------------------------------------------

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // 49

height = [1, 1];
console.log(maxArea(height)); // 1
