/**
 * @param {Function} fn
 * @return {Function}
 */

// -----------------------------------------
// ##Solutions
// -----------------------------------------
// #Solution 1 (too slow)
// -----------------------------------------
//
// function doArraysEqual(arr1, arr2) {
//   if (arr1 === arr2) return true;
//   if (arr1 == null || arr2 == null) return false;
//   if (arr1.length !== arr2.length) return false;

//   for (var i = 0; i < arr1.length; ++i) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }

// function findArrayInCache(cache, arr) {
//   let arrayPosition = -1;
//   cache.forEach((arrInCache, index) => {
//     arrInCacheResult = arrInCache.pop();
//     if (doArraysEqual(arrInCache, arr)) {
//       arrayPosition = index;
//     }
//     arrInCache.push(arrInCacheResult);
//   });
//   return arrayPosition;
// }

// function memoize(fn) {
//   let cache = [];
//   return function (...args) {
//     argsPositionInCache = findArrayInCache(cache, args);
//     if (argsPositionInCache != -1) {
//       return cache[argsPositionInCache][cache[argsPositionInCache].length - 1];
//     }
//     let result = fn(...args);
//     args.push(result);
//     cache.push(args);

//     return result;
//   };
// }
//
// -------------------------------
// #Solution 2
// -------------------------------

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    return cache.get(key);
  };
}

let callCount = 0;
let memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1

callCount = 0;
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
memoizedFn = memoize(factorial);
console.log(memoizedFn(2)); // 2
console.log(memoizedFn(3)); // 6
console.log(memoizedFn(2)); // 2
memoizedFn();
console.log(callCount); // 2
console.log(memoizedFn(3)); // 6
memoizedFn(); // 2
console.log(callCount); // 2
