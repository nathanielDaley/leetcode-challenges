// ------------------------------------------
// Solutions
// ------------------------------------------

// ------------------------------------------
// Solution 1
// ------------------------------------------
// /**
//  * @param {Function} fn
//  * @return {Object}
//  */
// Array.prototype.groupBy = function (fn) {
//   let arrayMap = {};
//   this.forEach((item) => {
//     let key = fn(item);
//     let value;
//     if (!arrayMap[key]) {
//       value = [item];
//     } else {
//       value = arrayMap[key];
//       value.push(item);
//     }
//     arrayMap[key] = value;
//   });

//   return arrayMap;
// };
// ------------------------------------------
// Solution 2
// ------------------------------------------
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let arrayMap = {};
  this.forEach((item) => {
    let key = fn(item);

    arrayMap[key] ? arrayMap[key].push(item) : (arrayMap[key] = [item]);
  });

  return arrayMap;
};

// ------------------------------------------
// Tests
// ------------------------------------------

// ------------------------------------------
// Test 1
// ------------------------------------------

console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
// ------------------------------------------
// Test 2
// ------------------------------------------

let array = [{ id: "1" }, { id: "1" }, { id: "2" }];
let fn = function (item) {
  return item.id;
};
console.log(array.groupBy(fn)); // { "1": [{"id": "1"}, {"id": "1"}], "2": [{"id": "2"}] }
// ------------------------------------------
// Test 3
// ------------------------------------------

array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];
fn = function (list) {
  return String(list[0]);
};
console.log(array.groupBy(fn)); // { "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] }
// ------------------------------------------
// Test 4
// ------------------------------------------

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fn = function (n) {
  return String(n > 5);
};
console.log(array.groupBy(fn)); // { "true": [6, 7, 8, 9, 10], "false": [1, 2, 3, 4, 5] }
