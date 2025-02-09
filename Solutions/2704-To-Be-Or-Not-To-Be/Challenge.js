/**
 * @param {string} val
 * @return {Object}
 */
var expect = (val) => {
  return {
    toBe: (toCheck) => {
      if (val === toCheck) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (toCheck) => {
      if (val !== toCheck) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
