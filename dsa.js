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
    }else break
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

   for(let i =0; i<s.length; i++){
       if(obj[s[i]]){
        arr.push(s[i])
       }else{
        if(obj[arr.pop()] !== s[i]) return false
       }
   }
   return arr.length === 0;
};


console.log(isValid(s))

const string = "   fly me   to   the moon  ";
var lengthOfLastWord = function (string) {
  const res = string.trim().split(" ").pop().length
  console.log(res)
  return res
};

console.log(lengthOfLastWord(string))

const a = "1010";
const b = "1011";

var addBinary = function (a, b) {
  console.log(BigInt("11" + "1"));
 
   return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

console.log(addBinary(a,b));