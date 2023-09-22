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
      if (words[i][0] == words[j][1]) if (words[i][1] == words[j][0]) count++;

  return count;
};

console.log(maximumNumberOfStringPairs(words));

const wordes = ["gin", "zen", "gig", "msg"];
var uniqueMorseRepresentations = function (wordes) {
  const morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  for (let i = 0; i < wordes.length; i++) {
    let morseWord = "";
    const word = wordes[i];
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      morseWord += morseCode[letter];
    }
    return new Set(morseWord).size;
  }
};

console.log(uniqueMorseRepresentations(wordes));

const key = "the quick brown fox jumps over the lazy dog";
const message = "vkbs bs t suepuv";

var decodeMessage = function (key, message) {
  let res = "";
  key = Array.from(new Set(key.split(" ").join("")));

  const hash = new Map();

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alphabet.length; i++) {
    hash.set(key[i], alphabet[i]);
  }
  for (let chr of message) {
    res += hash.get(chr) || " ";
  }
  return res;
};

console.log(decodeMessage(key, message));

const dolphins = (96 + 108 + 89)/3
console.log(dolphins)
const koalas = (88 + 91 + 110)/3
console.log(koalas)
if(dolphins > koalas){
  console.log("Dolphins win the trophy")
}else if (koalas > dolphins) {
  console.log("Koalas win the trophy");
} else if (dolphins === koalas) {
  console.log("Both win the trophy");
}

const s = "LVIII";
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
let count = 0;
for(let i = 0; i<s.length; i++){
  let curr = roman[s[i]]
  let next = roman[s[i + 1]]
  if(next > curr){
    count += next - curr
    i++
  }else {
    count += curr
  }
}
return count

};

console.log(romanToInt(s))