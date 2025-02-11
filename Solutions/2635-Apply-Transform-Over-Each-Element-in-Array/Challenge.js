/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// Solutions
// ---------------------

// Solution 1
// var filter = function (arr, fn) {
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       newArray.push(arr[i]);
//     }
//   }

//   return newArray;
// };

// Solution 2
function filter(arr, fn) {
  let currentIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      arr[currentIndex] = arr[i];
      currentIndex++;
    }
  }

  arr.length = currentIndex;
  return arr;
}

// Tests
// ----------------------
// Test 1
let arr = [0, 10, 20, 30];
let fn = function greaterThan10(n) {
  return n > 10;
};

console.log(filter(arr, fn)); // [20, 30]

//Test 2
arr = [1, 2, 3];
fn = function firstIndex(n, i) {
  return i === 0;
};

console.log(filter(arr, fn)); // [1]

// Test 3
arr = [-2, -1, 0, 1, 2];
fn = function plusOne(n) {
  return n + 1;
};

console.log(filter(arr, fn)); // [-2,0,1,2]
