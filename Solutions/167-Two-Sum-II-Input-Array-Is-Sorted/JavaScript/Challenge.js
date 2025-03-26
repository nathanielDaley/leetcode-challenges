// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (numbers, target) {
//   if (numbers.length == 2) return [1, 2];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
//     }
//   }
// };
// ------------------------------
// Solution 2
// ------------------------------
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  if (numbers.length === 2) return [1, 2];

  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (leftIndex < rightIndex) {
    const sum = numbers[leftIndex] + numbers[rightIndex];

    if (sum < target) {
      leftIndex++;
    } else if (sum > target) {
      rightIndex--;
    } else {
      return [leftIndex + 1, rightIndex + 1];
    }
  }

  return [];
};

// ------------------------------------------
// Tests
// ------------------------------------------
let numbers = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(numbers, target)); // [1,2]

numbers = [2, 3, 4];
target = 6;
console.log(twoSum(numbers, target)); // [1,3]

numbers = [-1, 0];
target = -1;
console.log(twoSum(numbers, target)); // [1,2]

numbers = [1, 2, 3, 4, 4, 9, 56, 90];
target = 8;
console.log(twoSum(numbers, target)); // [4, 5]
