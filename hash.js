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
