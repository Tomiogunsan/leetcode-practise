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
  return totalSum
};
console.log(leftRightDifference(nus));
