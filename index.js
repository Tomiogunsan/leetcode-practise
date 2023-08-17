console.log("it works");

const hours = [0, 1, 2, 3, 4];
const target = 2;
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  // for the index in hours
  // check if index is equal to or greater than target then return the number of index

  const result = hours
    .map((item, i) => {
      if (item >= target) {
        return item;
      }
    })
    .filter((item) => item !== undefined).length;

  return result;
};

numberOfEmployeesWhoMetTarget(hours, target);

const nums = [5, 0, 1, 2, 3, 4];
var buildArray = function (nums) {
  const ans = [];
  for (let i of nums) {
    const res = nums[i];
    ans.push(res);
  }
  return ans;
};

buildArray(nums);

const ums = [2, 5, 1, 3, 4, 7];
const n = 3;
var shuffle = function (ums, n) {
  const res = [];

  let j = n;
  for (let i = 0; i !== n && j !== ums.length; i++) {
    res.push(ums[i], ums[j]);

    j++;
  }
  return res;
};
console.log(shuffle(ums, n));
shuffle(ums, n);

const operations = ["++X", "++X", "X++"];
var finalValueAfterOperations = function (operations) {
  let sum = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "--X" || operations[i] === "X--") {
      operations[i] = -1;
    } else if (operations[i] === "++X" || operations[i] === "X++") {
      operations[i] = 1;
    }
    sum += operations[i];
  }

  return sum;
};

console.log(finalValueAfterOperations(operations));

const numb = [1, 2, 3, 1, 1, 3];
var numIdenticalPairs = function (numb) {
  let count = 0;
  for (let i = 0; i < numb.length; i++) {
    for (let j = i + 1; j < numb.length; j++) {
      if (numb[i] == numb[j]) {
        count++;
      }
    }
  }

  return count;
};

console.log(numIdenticalPairs(numb));

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

var kidsWithCandies = function (candies, extraCandies) {
  const res = [];

  let high = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    const output = candies[i] + extraCandies;

    if (output >= high) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
};

console.log(kidsWithCandies(candies, extraCandies));

const accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];

var maximumWealth = function (accounts) {
  let res = [];
  for (let i = 0; i < accounts.length; i++) {
    res.push(accounts[i].reduce((a, b) => a + b));
  }
  return Math.max(...res);
};

console.log(maximumWealth(accounts));

const numbs = [1, 2, 3, 4];
var runningSum = function (numbs) {
  let res = [];
  let sum = 0;
  for (let i = 0; i < numbs.length; i++) {
    sum += numbs[i];
    console.log(sum);
    res.push(sum);
  }
  return res;
};

console.log(runningSum(numbs));

const strs = ["flower", "flow", "flight"];
var findString = function (strs) {
  let longestPrefix = "";
  let res;
  if (strs.length === 0) return "";
  for (let i = 0; i < strs[0].length; i++) {
    let character = strs[0][i];
    console.log(character);
    if (strs.every((item) => item[i] === character)) {
      longestPrefix += character;
    } else {
      break;
    }
  }
  return longestPrefix;
};

console.log(findString(strs));

const sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
var mostWordsFound = function (sentences) {
  const res = sentences.splice(",");
  console.log(res);
  let temp = 0;
  res.forEach((item, i) => {
    console.log(item.split(" "));
    if (item.split(" ").length > temp) {
      temp = item.split(" ").length;
    }
  });
  return temp;
};

console.log(mostWordsFound(sentences));

const nus = [10, 4, 8, 3];
var leftRightDifference = function (nus) {
  const res = [0];
  const res1 = [0];

  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < nus.length - 1; i++) {
    sum += nus[i];
    res.push(sum);

    console.log(res);
  }

  for (let i = nus.length - 1; i > 0; i--) {
    sum2 += nus[i];
    res1.unshift(sum2);
    console.log(res1);
  }
  // sum of two arrays
  const totalSum = res.map((num, i) => {
    return Math.abs(num - res1[i]);
  });
  console.log(totalSum);
  return totalSum;
};
console.log(leftRightDifference(nus));

const address = "255.100.50.0";

var defangIPaddr = function (address) {
  // for(let i = 0; i < address.length; i++)
  // console.log(address[i])
  // if (address[i] === ".") {
  //   address.replace(".", "[.]");
  // }
  const res = address.replaceAll(".", "[.]");
  return res;
};
console.log(defangIPaddr(address));

// strings problem
const jewels = "aA";
const stones = "aAAbbbb";

var numJewelsInStones = function (jewels, stones) {
  const jewelSet = new Set(jewels);
 

  let count = 0;
  for (let stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }
  return count;
};

console.log(numJewelsInStones(jewels, stones));

const command = "G()()()()(al)";
var interpret = function (command) {
  // const res = command.split("()").join("o").split("(al)").join("al");

  const res = command.replaceAll("()", "o");
  const res2 = res.replace("(al)", "al");
 
  return res;
};

console.log(interpret(command));

const s = "RLRRLLRLRL";
var balancedStringSplit = function (s) {
  let res = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "L") {
      ans++;
    } else {
      ans--;
    }
    if (ans == 0) {
      res++;
    }
  }
  return res;
};

console.log(balancedStringSplit(s));

const sa = "codeleet";
const indices = [4, 5, 6, 7, 0, 2, 1, 3];
var restoreString = function (sa, indices) {
  const ans = new Array(indices.length);

  for (let i = 0; i < indices.length; i++) {
    ans[indices[i]] = sa[i];
  }
  return ans.join("");
};

console.log(restoreString(sa, indices));

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
var arrayStringsAreEqual = function (word1, word2) {
  let res1 = word1.join(" ");

  let res2 = word2.join(" ");

  if (res1 === res2) {
    return true;
  }
  return false;
};

console.log(arrayStringsAreEqual(word1, word2));

const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];
const ruleKey = "color";
const ruleValue = "silver";
var countMatches = function (items, ruleKey, ruleValue) {
  let ruleKeys = ["type", "color", "name"];

  return items.filter((item) => item[ruleKeys.indexOf(ruleKey)] === ruleValue)
    .length;
};

console.log(countMatches(items, ruleKey, ruleValue));

const text = "chopper is not a tanuki";
const k = 5;
var truncateSentence = function (text, k) {
  const res = text.split(" ").slice(0, k).join(" ");

  return res;
};

console.log(truncateSentence(text, k));

const sen = "is2 sentence4 This1 a3";
var sortSentence = function (sen) {
  const newS = [];

  let res = sen.split(" ");
  res.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      if (!isNaN(word[i])) {
        newS[word[i]] = word.slice(0, i);
      }
    }
  });
  return newS;
};

console.log(sortSentence(sen));

const sene = "Hello";
var toLowerCase = function (sene) {
  const res = s.toLowerCase();
  return res;
};

console.log(toLowerCase(sene));

const sent = "Let's take LeetCode contest";
var reverseWords = function (sent) {
  let s;
  const res = sent.split(" ");

  s = res.map((word) => word.split("").reverse().join(" "));
  return s.join(" ");
};

console.log(reverseWords(sent));

const word3 = "abcd";
const word4 = "pq";

var mergeAlternately = function (word3, word4) {
  var maxLength = Math.max(word3.length, word4.length);
  var chars = [];
  for (var i = 0; i < maxLength; i++) {
    if (word3[i]) {
      chars.push(word3[i]);
    }

    if (word4[i]) chars.push(word4[i]);
  }
  return chars.join("");
};

console.log(mergeAlternately(word3, word4));
