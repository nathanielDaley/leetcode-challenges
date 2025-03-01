// ------------------------------
// Solutions
// ------------------------------
// Solution 1 - Bubble Sort
// ------------------------------
// /**
//  * @param {Array} arr
//  * @param {Function} fn
//  * @return {Array}
//  */
// let sortBy = function (arr, fn) {
//   n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - 1; j++) {
//       x = fn(arr[j]);
//       y = fn(arr[j + 1]);
//       if (x > y) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// };

// ------------------------------
// Solution 2 - Javascript Array prototype sort
// ------------------------------

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
let sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

// ------------------------------------------
// Tests
// ------------------------------------------

let arr = [5, 4, 1, 2, 3];
let fn = (x) => x;
console.log(sortBy(arr, fn)); // [1, 2, 3, 4, 5]

arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
fn = (d) => d.x;
console.log(sortBy(arr, fn)); // [{"x": -1}, {"x": 0}, {"x": 1}]

arr = [
  [3, 4],
  [5, 2],
  [10, 1],
];
fn = (x) => x[1];
console.log(sortBy(arr, fn)); // [[10, 1], [5, 2], [3, 4]]
