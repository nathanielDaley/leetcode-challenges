/**
 * @param {Function[]} functions
 * @return {Function}
 */

// Solutions
// --------------------------------
// Solutions 1
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight(
      (accumulativeX, currentFunction) => currentFunction(accumulativeX),
      x
    );
  };
};

//Solution 2
// var compose = function (functions) {
//   return function (x) {
//     for (let i = functions.length - 1; i >= 0; i--) {
//       x = functions[i](x);
//     }
//     return x;
//   };
// };

// Tests
// ---------------------------------
// Test 1
let functions = compose([(x) => x + 1, (x) => 2 * x]);
console.log(functions(4)); // 9

// Test 2
functions = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(functions(4)); // 65

// Test 3
functions = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x], (x = 1));
console.log(functions(1)); // 1000

// Test 4
functions = compose([]);
console.log(functions(42)); // 42
