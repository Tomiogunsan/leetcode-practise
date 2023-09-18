const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];
var sortPeople = function (names, heights) {
  let obj = names.map((name, i) => ({ name: names[i], hgt: heights[i] }));
 obj.sort((a, b) => b.hgt - a.hgt);
 return obj.map((name) => name.name);
};

console.log(sortPeople(names, heights));

const words = ["cd", "ac", "dc", "ca", "zz"];


var maximumNumberOfStringPairs = function (words) {
let count = 0;

for (let i = 0; i < words.length; i++)
  for (let j = i + 1; j < words.length; j++)
    if (words[i][0] == words[j][1]) 
    if (words[i][1] == words[j][0]) count++;

return count;

};

console.log(maximumNumberOfStringPairs(words));