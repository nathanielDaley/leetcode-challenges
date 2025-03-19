// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function (strs) {
//   let strsMap = {};

//   for (let i = 0; i < strs.length; i++) {
//     let str = strs[i];
//     let sortedStr = str.split("").sort();
//     if (!strsMap[sortedStr]) {
//       strsMap[sortedStr] = [str];
//     } else {
//       strsMap[sortedStr].push(str);
//     }
//   }

//   return Object.values(strsMap);
// };

// ------------------------------
// Solution 2
// ------------------------------
// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function (strs) {
//   let strsMap = {};

//   for (let s of strs) {
//     let sortedStr = s.split("").sort();
//     if (!strsMap[sortedStr]) {
//       strsMap[sortedStr] = [s];
//     } else {
//       strsMap[sortedStr].push(s);
//     }
//   }

//   return Object.values(strsMap);
// };

// ------------------------------
// Solution 3
// ------------------------------
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let strsMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split("").sort().join("");

    if (!strsMap.has(sortedStr)) {
      strsMap.set(sortedStr, [strs[i]]);
    } else {
      strsMap.get(sortedStr).push(strs[i]);
    }
  }

  return Array.from(strsMap.values());
};

// ------------------------------------------
// Tests
// ------------------------------------------
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs)); // [["bat"],["nat","tan"],["ate","eat","tea"]]

strs = [""];
console.log(groupAnagrams(strs)); // [[""]]

strs = ["a"];
console.log(groupAnagrams(strs)); // [["a"]]
