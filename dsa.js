const username = ["bees", "superhero", "ace"];

function canSwapToSmaller(username) {
  // Convert the string to an array of characters
}

function result() {
  return username.map(canSwapToSmaller);
}

console.log(canSwapToSmaller(username));
console.log(result());

const haystack = "sadbutsad";
const needle = "sad";
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr(haystack, needle));

const strs = ["flower", "flow", "flight"];
var longestCommonPrefix = function (strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    console.log(strs[0][i]);
    if (strs.every((item) => item[i] === strs[0][i])) {
      prefix += strs[0][i];
    } else break;
  }
  return prefix;
};

console.log(longestCommonPrefix(strs));

const s = "()";
var isValid = function (s) {
  let arr = [];
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      arr.push(s[i]);
    } else {
      if (obj[arr.pop()] !== s[i]) return false;
    }
  }
  return arr.length === 0;
};

console.log(isValid(s));

const string = "   fly me   to   the moon  ";
var lengthOfLastWord = function (string) {
  const res = string.trim().split(" ").pop().length;

  return res;
};

console.log(lengthOfLastWord(string));

const a = "1010";
const b = "1011";

var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

console.log(addBinary(a, b));

const palin = " ";
var isPalindrome = function (palin) {
  return (
    palin
      .toLowerCase()
      .replaceAll(/[^a-zA-Z0-9]/g, "")
      .split("")
      .reverse()
      .join("") ===
    palin
      .toLowerCase()
      .replaceAll(/[^a-zA-Z0-9]/g, "")
      .split("")
      .join("")
  );
};

console.log(isPalindrome(palin));

// So we need to create a loop and:

// Get the code for the first letter
// Use this code as an index in the ASCII table to get the char
// Add this char to our result string
// Get the new columnNumber for the next character by removing the code that we've already accounted for and dviding by 26
columnNumber = 701;
var convertToTitle = function (columnNumber) {
  let result = "";
  while (columnNumber > 0) {
    const mod = (columnNumber - 1) % 26;
    result = String.fromCharCode(mod + 65) + result;
    columnNumber = (columnNumber - 1 - mod) / 26;
  }
  return result;
};

// convert excel title to number
columnTitle = "AB";
var titleToNumber = function (columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result =
      (columnTitle.charCodeAt(i) - 64) *
        Math.pow(26, columnTitle.length - i - 1) +
      result;
  }
  return result;
};

console.log(titleToNumber(columnTitle));

const arr = [3, 5, 1];
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);

  let diff = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }
  return true;
};

console.log(canMakeArithmeticProgression(arr));

const ar = [1, 1, 2, 2, 3];
const ab = 0;
const ba = 0;
const c = 1;
var countGoodTriplets = function (ar, ab, ba, c) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        )
          count++;
      }
    }
  }
  return count;
};


