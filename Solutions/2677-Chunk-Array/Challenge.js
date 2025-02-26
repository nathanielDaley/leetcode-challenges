// ------------------------------
// Solutions
// ------------------------------
// Solution 1

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
// var chunk = function (arr, size) {
//   let newArray = [];
//   let subArray = [];
//   arr.forEach((item) => {
//     subArray.push(item);
//     if (subArray.length == size) {
//       newArray.push(subArray);
//       subArray = [];
//     }
//   });
//   if (subArray.length > 0) {
//     newArray.push(subArray);
//   }
//   return newArray;
// };

// ------------------------------
// Solution 2

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const newArray = [];

  for (let i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
  }
  return newArray;
};

// ------------------------------------------
// Tests
// ------------------------------------------

let arr = [1, 2, 3, 4, 5];
let size = 1;
console.log(chunk(arr, size)); //[[1],[2],[3],[4],[5]]

arr = [1, 9, 6, 3, 2];
size = 3;
console.log(chunk(arr, size)); //[[1,9,6],[3,2]]

arr = [8, 5, 3, 2, 6];
size = 6;
console.log(chunk(arr, size)); //[[8,5,3,2,6]]

arr = [];
size = 1;
console.log(chunk(arr, size)); //[];
