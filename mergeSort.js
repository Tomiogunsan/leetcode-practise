// const arr1 = [1,10,50];
// const arr2 = [2, 14, 99, 100];
// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i])
//             i++
//         }else {
//             results.push(arr2[j])
//             j++
//         }
//     }
//     while(i < arr1.length){
//         results.push(arr1[i])
//     }
//     while(j < arr2.length){
//         results.push(arr2[j])
//         j++
//     }
//     return results
// }

// console.log(merge(arr1, arr2))

// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left, right)

// }

// console.log(mergeSort([10,24,76,73]))

const ma = [3, 4, 5, 2];

var maxProduct = function (ma) {
  let j = 1;
  let res = [];
  for (let i = 0; i < ma.length; i++) {
    res.push((ma[i] - 1) * (ma[j] - 1));
  }
};

console.log(maxProduct(ma));

const months = ["Jan", "March", "April", "June"];
const nw = ["dec", "nov", "oct"];
months.splice(3, 0, ...nw);
console.log(months);

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

var merge = function (nums1, m, nums2, n) {
  // method 1
  // nums1.splice(m, n, ...nums2)
  // nums1.sort((a,b) => a-b)
  // method 2

  nums1.splice(m, m + n);

  const res = [...nums1, ...nums2];

  return res.sort((a, b) => a - b);
};

console.log(merge(nums1, m, nums2, n));

const nums = [3, 2, 3];
var majorityElement = function (nums) {
  const lookup = {};

  for (let i of nums) {
    lookup[i] = lookup[i] + 1 || 1;
  }
  console.log(lookup);
  //   let max = -Infinity
  //   let highest = null
  //  for(let key in lookup){
  // if(lookup[key] > max){
  //   max = lookup[key]
  //   highest = key
  // }
  //  }
  //   return highest
  let keys = Object.keys(lookup);
  keys.sort((a, b) => lookup[b] - lookup[a]);
  return keys[0];
};

console.log(majorityElement(nums));

const numsa = [1, 2, 3, 1];

var containsDuplicate = function (numsa) {
  numsa.sort((a, b) => a - b);

  for (let i = 0; i < numsa.length; i++) {
    if (numsa[i] === numsa[i + 1]) return true;
  }
  return false;
};

console.log(containsDuplicate(numsa));

const numsA = [1, 2, 2, 1];
const numsB = [2, 2];
var intersect = function (numsA, numsB) {
  //  const map = new Map()
  //  for(let n of numsA){
  //   if(map.has(n)){
  //     map.set(n, map.get(n) + 1)
  //   }else{
  //     map.set(n,1)
  //   }
  //   console.log(map)
  //  }
  //  const res = []
  //  for(let n of numsB){
  //   console.log(map.get(n))
  //   if (map.has(n) && map.get(n) > 0) {
  //     res.push(n);
  //     map.set(n, map.get(n) - 1);
  //   }
  //  }
  // console.log(res)
  const lookup = {};
  for (let n of numsA) {
    lookup[n] = lookup[n] + 1 || 1;
  }
  const res = [];

  for (let n of numsB) {
    if (lookup[n] > 0) {
      lookup[n] = lookup[n] - 1;
      res.push(n);
    }
  }
  return res;
};

console.log(intersect(numsA, numsB));

const s = "aacc";
const t = "ccac";
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let lookup = {};
  for (let i = 0; i < s.length; i++) {
    lookup[s[i]] = lookup[s[i]] + 1 || 1;
  }
  for (let j = 0; j < t.length; j++) {
    if (!lookup[t[j]]) return false;
    else {
      lookup[t[j]]--;
    }
  }
  return true;

  // note: you can also sort an alphabet
};

console.log(isAnagram(s, t));

// Maximum Product Difference Between Two Pairs

const num = [5, 6, 2, 7, 4];
var maxProductDifference = function (num) {
  num = num.sort((a, b) => a - b);
  console.log(nums);
  return num[num.length - 1] * num[num.length - 2] - num[0] * num[1];
};

console.log(maxProductDifference(num));

// max product of two element
const nu = [1, 5, 4, 5];
var maxProduct = function (nu) {
  nu = nu.sort((a, b) => a - b);
  return (nu[nu.length - 2] - 1) * (nu[nu.length - 1] - 1);
};

console.log(maxProduct(nu));

const grid = [
  [1, 2, 4],
  [3, 3, 1],
];

var deleteGreatestValue = function (grid) {
  grid.map((gr) => gr.sort((a, b) => a - b));

  let sum = 0;

  while (grid[0].length) {
    let column = [];
    for (let row of grid) column.push(row.pop());

    sum += Math.max(...column);
  }

  return sum;
};
console.log(deleteGreatestValue(grid));
