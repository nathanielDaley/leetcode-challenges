// ------------------------------
// Solutions
// ------------------------------
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let scharsMap = new Map();
  let tcharsMap = new Map();
  for (let i = 0; i < s.length; i++) {
    scharsMap[s[i]] = scharsMap[s[i]] + 1 || 1;
    tcharsMap[t[i]] = tcharsMap[t[i]] + 1 || 1;
  }

  for (const key in scharsMap) {
    if (scharsMap[key] !== tcharsMap[key]) {
      return false;
    }
  }

  return true;
};

let s = "racecar";
let t = "carrace";
console.log(isAnagram(s, t));

s = "jar";
t = "jam";
console.log(isAnagram(s, t));

s = "a";
t = "ab";
console.log(isAnagram(s, t));
