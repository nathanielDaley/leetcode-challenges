/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  arr.forEach((element, index) => {
    arr[index] = fn(element, index);
  });
  return arr;
};

// Test 1
let arr = [1, 2, 3];
function plusone(n) {
  return n + 1;
}

let newArray = map(arr, plusone);
console.log(newArray); // [2, 3, 4]

// Test 2
arr = [1, 2, 3];
function plusI(n, i) {
  return n + i;
}

newArray = map(arr, plusI);
console.log(newArray); // [1, 3, 5]

// Test 2
arr = [10, 20, 30];
function constant() {
  return 42;
}

newArray = map(arr, constant);
console.log(newArray); // [42,42,42]
