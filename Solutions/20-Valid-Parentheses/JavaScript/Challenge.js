// ------------------------------
// Solutions
// ------------------------------
// Solution 1
// ------------------------------
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// let isValid = (s) => {
//   while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
//     s = s.replace("()", "");
//     s = s.replace("[]", "");
//     s = s.replace("{}", "");
//   }

//   return s.length == 0 ? true : false;
// };

// ------------------------------
// Solution 2
// ------------------------------

let isValid = (s) => {
  const stack = [];
  const closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let c of s) {
    if (closeToOpen[c]) {
      if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let s = "()";
console.log(isValid(s)); // true

s = "()[]{}";
console.log(isValid(s)); // true

s = "(]";
console.log(isValid(s)); // false

s = "([])";
console.log(isValid(s)); // true
