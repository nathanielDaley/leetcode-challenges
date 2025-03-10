/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let ran = false;

  return function (...args) {
    if (!ran) {
      ran = true;

      return fn(...args);
    }
    return undefined;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
