// ------------------------------
// Solutions
// ------------------------------

// ------------------------------
// Solution 1
// ------------------------------

// /**
//  * @param {Array} arr
//  * @param {number} depth
//  * @return {Array}
//  */
// let flat = function (arr, n) {
//   let newArray = [...arr];
//   for (let i = 0; i < n; i++) {
//     newArray = stepFlat(newArray);
//   }
//   return newArray;
// };

// let stepFlat = (arr) => {
//   let newArray = [];
//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       newArray.push(...element);
//     } else {
//       newArray.push(element);
//     }
//   });
//   return newArray;
// };

// ------------------------------
// Solution 2
// ------------------------------

// /**
//  * @param {Array} arr
//  * @param {number} depth
//  * @return {Array}
//  */
// let flat = function (arr, n) {
//   let newArray;
//   if (n > 0) {
//     for (let i = 0; i < n; i++) {
//       newArray = [];
//       arr.forEach((element) => {
//         if (Array.isArray(element)) {
//           newArray.push(...element);
//         } else {
//           newArray.push(element);
//         }
//       });
//       arr = newArray;
//     }
//   }
//   return arr;
// };

// ------------------------------
// Solution 3
// ------------------------------

// /**
//  * @param {Array} arr
//  * @param {number} depth
//  * @return {Array}
//  */
// let flat = function (arr, n) {
//   if (n > 0) {
//     let newArray = [];
//     arr.forEach((element) => {
//       if (Array.isArray(element)) {
//         if (n == 1) {
//           newArray.push(...element);
//         } else {
//           newArray.push(...flat(element, n - 1));
//         }
//       } else {
//         newArray.push(element);
//       }
//     });
//     return newArray;
//   }
//   return arr;
// };

// ------------------------------
// Solution 4
// ------------------------------

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (array, depth) {
  const stack = [...array.map((element) => [element, depth])];
  const result = [];

  while (stack.length > 0) {
    const [element, depth] = stack.pop();

    if (Array.isArray(element) && depth > 0) {
      stack.push(...element.map((subElement) => [subElement, depth - 1]));
    } else {
      result.push(element);
    }
  }

  return result.reverse();
};

// ------------------------------------------
// Tests
// ------------------------------------------

// ------------------------------
// Test 1
// ------------------------------
let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 0;
console.log(flat(arr, n)); // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// ------------------------------
// Test 2
// ------------------------------
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 1;
console.log(flat(arr, n)); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// ------------------------------
// Test 3
// ------------------------------
arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
n = 2;
console.log(flat(arr, n)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
