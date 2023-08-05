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
