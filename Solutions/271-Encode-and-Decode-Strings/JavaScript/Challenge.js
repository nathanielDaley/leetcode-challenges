// ------------------------------
// Solutions
// ------------------------------
/**
 * @param {string[]} strs
 * @returns {string}
 */
let encode = function (strs) {
  if (strs.length === 0) return "";

  let newString = "";

  for (let i = 0; i < strs.length - 1; i++) {
    newString += strs[i].length + "#" + strs[i];
  }
  newString += strs[strs.length - 1].length + "#" + strs[strs.length - 1];

  return newString;
};

/**
 * @param {string} str
 * @returns {string[]}
 */
let decode = function (str) {
  if (str.length === 0) return [];

  let strArray = [];
  let strToPush = "";

  for (let i = 0; i < str.length - 1; i++) {
    let strToPushLengthStr = "";
    while (str[i] !== "#") {
      strToPushLengthStr += str[i];
      i++;
    }
    let strToPushLengthInt = parseInt(strToPushLengthStr);
    strToPush = str.slice(i + 1, i + strToPushLengthInt + 1);
    strArray.push(strToPush);
    i += strToPushLengthInt;
  }

  return strArray;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let dummyInput = ["Hello", "World"];
let intermediary = encode(dummyInput);
let dummyOutput = decode(intermediary);
console.log(intermediary, dummyOutput); // 5#Hello5#World ['Hello', 'World]

dummyInput = [];
intermediary = encode(dummyInput);
dummyOutput = decode(intermediary);
console.log(intermediary, dummyOutput); // "" []

dummyInput = ["neet", "code", "love", "you"];
intermediary = encode(dummyInput);
dummyOutput = decode(intermediary);
console.log(intermediary, dummyOutput); // 4#neet4#code4#love3#you ['neet', 'code', 'love', 'you']

dummyInput = ["we", "say", ":", "yes"];
intermediary = encode(dummyInput);
dummyOutput = decode(intermediary);
console.log(intermediary, dummyOutput); // 2#we3#say1#:3#yes ["we", "say", ":", "yes"]
