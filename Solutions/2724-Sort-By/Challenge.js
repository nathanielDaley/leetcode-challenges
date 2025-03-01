// ------------------------------
// Solutions
// ------------------------------
// Solution 1 - Bubble Sort
//
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      x = fn(arr[j]);
      y = fn(arr[j + 1]);
      if (x > y) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

// ------------------------------------------
// Tests
// ------------------------------------------

let arr = [5, 4, 1, 2, 3];
let fn = (x) => x;
console.log(sortBy(arr, fn)); //[1, 2, 3, 4, 5]
