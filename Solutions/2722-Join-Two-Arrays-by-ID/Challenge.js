// ------------------------------
// Solutions
// ------------------------------

// ------------------------------
// Solution 1
// ------------------------------

// /**
//  * @param {Array} arr1
//  * @param {Array} arr2
//  * @return {Array}
//  */
// var join = function (arr1, arr2) {
//   ids = [];

//   // Merges matching objects between array one and array 2 by overwriting values from array 2 onto array 1
//   arr1.forEach((element1, index1) => {
//     ids.push(element1["id"]);

//     arr2.forEach((element2, index2) => {
//       if (element1["id"] === element2["id"]) {
//         Object.keys(element2).forEach((key) => {
//           arr1[index1][key] = element2[key];
//         });
//       }
//     });
//   });
//   // Adds unique elements from array 2 to array 1
//   arr2.forEach((element) => {
//     if (!ids.includes(element["id"])) {
//       arr1.push(element);
//     }
//   });

//   // Sort the array by id before returning
//   return arr1.sort((a, b) => a.id - b.id);
// };

// ------------------------------
// Solution 2
// ------------------------------

// /**
//  * @param {Array} arr1
//  * @param {Array} arr2
//  * @return {Array}
//  */
// var join = function (arr1, arr2) {
//   const combinedArrays = arr1.concat(arr2);
//   const mergedArraysMap = {};

//   combinedArrays.forEach((element) => {
//     const id = element.id;

//     if (!mergedArraysMap[id]) {
//       mergedArraysMap[id] = { ...element };
//     } else {
//       mergedArraysMap[id] = { ...mergedArraysMap[id], ...element };
//     }
//   });
//   // Sort the array by id before returning
//   return Object.values(mergedArraysMap);
// };

// ------------------------------
// Solution 3
// ------------------------------

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const combinedArrays = {};

  arr1.forEach((element) => {
    const id = [element["id"]];
    combinedArrays[id] = element;
  });
  arr2.forEach((element) => {
    const id = [element["id"]];
    if (!combinedArrays[id]) {
      combinedArrays[id] = element;
    } else {
      combinedArrays[id] = { ...combinedArrays[id], ...element };
    }
  });
  // Sort the array by id before returning
  return Object.values(combinedArrays);
};

// ------------------------------------------
// Tests
// ------------------------------------------

// ------------------------------
// Test 1
// ------------------------------
let arr1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
];
let arr2 = [{ id: 3, x: 5 }];
console.log(join(arr1, arr2)); // [{"id": 1, "x": 1},{"id": 2, "x": 9},{"id": 3, "x": 5}]

// ------------------------------
// Test 2
// ------------------------------
arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
console.log(join(arr1, arr2)); // [{"id": 1, "x": 2, "y": 3},{"id": 2, "x": 10, "y": 20},{"id": 3, "x": 0, "y": 0}]

// ------------------------------
// Test 3
// ------------------------------
arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
console.log(join(arr1, arr2)); // [{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}]
