const username = ["bees", "superhero", "ace"];

function canSwapToSmaller(username) {
  // Convert the string to an array of characters
    
  }


function result () {
    return username.map(canSwapToSmaller)
}


console.log(canSwapToSmaller(username));
console.log(result())

const haystack = "sadbutsad";
const needle = "sad";
var strStr = function (haystack, needle) {
   return haystack.indexOf(needle);
};

console.log(strStr(haystack, needle));

const strs = ["flower", "flow", "flight"];
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
      return "";
    }
    let prefix = strs[0];
    console.log(prefix)
    for(let word of strs){
        console.log(word.indexOf(prefix) !== 0)
        while(word.indexOf(prefix) !== 0){
            prefix = prefix.slice(0,  -1);
            console.log(prefix)
            if (prefix === "") return "";
        }
    }
    return prefix
};

console.log(longestCommonPrefix(strs));