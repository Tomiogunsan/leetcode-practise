const str1 = "listen";
const str2 = "silent";
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  console.log(str1.split("").sort().join(""));
  console.log(str2.split("").sort().join(""));
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(anagram(str1, str2));


