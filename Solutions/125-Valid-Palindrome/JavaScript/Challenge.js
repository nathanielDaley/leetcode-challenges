// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function (s) {
//   if (s.length === 0 || s.length === 1) return true;

//   s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

//   for (let i = 0; i < s.length / 2; i++) {
//     if (s[i] !== s[s.length - i - 1]) return false;
//   }

//   return true;
// };
// ------------------------------
// Solution 2
// ------------------------------
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0 || s.length === 1) return true;

  s = s.toLowerCase();
  let sAfterCharReplace = [];

  // create our own character removal function;
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) {
      sAfterCharReplace.push(c);
    }
  }

  // get the characters from the beginning and end and compare them.
  let arrLength = sAfterCharReplace.length;
  for (let i = 0; i < arrLength / 2; i++) {
    if (sAfterCharReplace[i] != sAfterCharReplace[arrLength - i - 1])
      return false;
  }

  return true;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s)); // true

s = "race a car";
console.log(isPalindrome(s)); // false

s = " ";
console.log(isPalindrome(s)); // true

s = "0P";
console.log(isPalindrome(s)); // false

s = "Was it\\ a rat I saw?";
console.log(isPalindrome(s)); // false
