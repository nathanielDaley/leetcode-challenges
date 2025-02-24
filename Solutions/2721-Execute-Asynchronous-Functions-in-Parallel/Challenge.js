/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      resolve([]);
    }

    let resolvedFunctions = new Array(functions.length);
    let resolvedFunctionCount = 0;

    functions.forEach((subFunction, index) => {
      subFunction()
        .then((subResolve) => {
          resolvedFunctions[index] = subResolve;
          resolvedFunctionCount++;

          if (resolvedFunctionCount === functions.length) {
            resolve(resolvedFunctions);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// -------------------------------------------------
// Tests
// -------------------------------------------------

// Test 1
// -------------------------------------------------
const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]

// Test 2
// -------------------------------------------------
const functions2 = [
  () => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
];
const promise2 = promiseAll(functions2);
promise2.then(console.log); // [5]

// Test 3
// -------------------------------------------------
const functions3 = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
  () =>
    new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
];
const promise3 = promiseAll(functions3);
promise3.then(console.log).catch(console.error); // Error

// Test 4
// -------------------------------------------------
const functions4 = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];
const promise4 = promiseAll(functions4);
promise4.then(console.log).catch(console.error); // [4, 10, 16]
