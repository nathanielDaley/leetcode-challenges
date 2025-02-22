// ------------------------------
// Solutions
// ------------------------------
// Solution 1
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          clearTimeout(timer);
        });
    });
  };
};

// ----------------------------------
// Solution 2

// /**
//  * @param {Function} fn
//  * @param {number} t
//  * @return {Function}
//  */
// var timeLimit = function (fn, t) {
//   return async function (...args) {
//     const originalFnPromise = fn(...args);

//     const timeoutPromise = new Promise((_, reject) => {
//       timer = setTimeout(() => {
//         reject("Time Limit Exceeded");
//       }, t);
//     });

//     return Promise.race([originalFnPromise, timeoutPromise]).finally(() => {
//       clearTimeout(timer);
//     });
//   };
// };

// ------------------------------------------
// Tests
// ------------------------------------------
// Test 1

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
