const nums = [1, 2, 5, 2, 3];
const target = 2;

var targetIndices = function (nums, target) {
  let res = [];
  const sortNums = nums.sort((a, b) => a - b);

  sortNums.map((val, i) => {
    if (val === target) {
      res.push(i);
    }
  });
  return res;
};

console.log(targetIndices(nums, target));

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
var countNegatives = function (grid) {
  let count = 0;
  const res = grid.map((item) => item.sort((a, b) => a - b));

  res.map((val) => {
    val.map((element) => {
      console.log(element);
      if (element <= -1) {
        console.log(element);
        count++;
      }
    });
  });

  return count;
};

console.log(countNegatives(grid));

const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

const k = 3;

var kWeakestRows = function (mat, k) {
  let result = [];

  for (let i = 0; i < mat.length; i++) {
    let count = 0;

    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++;
      }
    }
    result.push(count);
  }
  const itemToSort = result.map((value, index) => ({ value, index }));

  return itemToSort
    .sort((a, b) => a.value - b.value)
    .map((item) => item.index)
    .slice(0, k);
};

console.log(kWeakestRows(mat, k));

const haystack = "leetcode";
const needle = "leeto";

function searchNeedle(haystack, needle) {
  const index = haystack.indexOf(needle);
  if (index === -1) return -1;
  else return index;
}

console.log(searchNeedle(haystack, needle));

const bum = [4, 5, 2, 1];
const queries = [3, 10, 21];

var answerQueries = function (bum, queries) {
  const arr = [];
  let sum = 0;
  let check = 0;
  bum.sort((a, b) => a - b);
  for (let i = 0; i < queries.length; i++) {
    sum = 0;
    check = 0;
    for (let j = 0; j < bum.length; j++) {
      sum += bum[j];
      console.log(sum);
      if (sum <= queries[i]) check += 1;
      else break;
    }
    console.log(check);
    arr.push(check);
  }
  return arr;
};

console.log(answerQueries(bum, queries));

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

var intersection = function (nums1, nums2) {
  const intersection = new Set();
  const a = new Set(nums1);
  const b = new Set(nums2);

  for (let elem of a) {
    if (b.has(elem)) {
      intersection.add(elem);
    }
  }

  const res = Array.from(intersection);

  return res;
};

console.log(intersection(nums1, nums2));

const a = [5, 20, 66, 1314];
var maximumCount = function (a) {
let count1 = 0
let count2 = 0
for(let i = 0; i< a.length; i++){
  if(a[i] < 0 ) count1++
  if(a[i] > 0) count2++
}
console.log(count1,count2)
return Math.max(count1, count2);
};

console.log(maximumCount(a));