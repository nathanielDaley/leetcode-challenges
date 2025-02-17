// /**
//  * @param {Promise} promise1
//  * @param {Promise} promise2
//  * @return {Promise}
//  */
var addTwoPromises = async function (promise1, promise2) {
  return await Promise.all([promise1, promise2]).then(
    ([value1, value2]) => value1 + value2
  );
};

let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then(console.log); // 7

promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50));
promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));

addTwoPromises(promise1, promise2).then(console.log); // -2
