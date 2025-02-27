// ------------------------------
// Solutions
// ------------------------------

// ------------------------------
// Solution 1
// ------------------------------

/**
 * @return {null|boolean|number|string|Array|Object}
 */
// Array.prototype.last = function () {
//   return this.length > 0 ? this.at(-1) : -1;
// };

// ------------------------------
// Solution 2
// ------------------------------

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.at(-1) ?? -1;
};

// ------------------------------------------
// Tests
// ------------------------------------------

// ------------------------------
// Test 1
// ------------------------------
let arr = [1, 2, 3];
console.log(arr.last()); // 3

// ------------------------------
// Test 2
// ------------------------------
arr = [];
console.log(arr.last()); // -1
