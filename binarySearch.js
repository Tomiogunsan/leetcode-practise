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
console.log(intersection)
  const res = Array.from(intersection);

  return res;
};

console.log(intersection(nums1, nums2));

const a = [5, 20, 66, 1314];
var maximumCount = function (a) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) count1++;
    if (a[i] > 0) count2++;
  }

  return Math.max(count1, count2);
};

console.log(maximumCount(a));

const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;
var findTheDistanceValue = function (arr1, arr2, d) {
  let res = 0;
  for (let i = 0; i < arr1.length; i++) {
    let count = 0;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        count = 1;
        break;
      }
    }
    if (count === 0) res++;
  }

  return res;
};

console.log(findTheDistanceValue(arr1, arr2, d));

const nums3 = [3, 0, 1];
var missingNumber = function (nums3) {
  const set = new Set(nums3);

  for (let i = 0; i <= nums3.length; i++) {
    if (!set.has(i)) return i;
  }
};

console.log(missingNumber(nums3));

 const numsb = [1, 3, 5, 6]
  const targetb = 8;

  var searchInsert = function (numsb, targetb) {
    let left = 0,
      right = numsb.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (numsb[mid] == targetb) {
        return mid;
      } else if (numsb[mid] < targetb) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;  
    // let i = numsb.findIndex((n) => n >= targetb);
    // console.log(i)
    // return i > -1 ? i : numsb.length;
  //   const set = new Set(numsb)
  //   console.log(set)
  //  for(let i = 0; i < numsb.length; i++){
  //   console.log(numsb[i])
  //   if(numsb[i] === targetb){
  //     return i
  //   }if( !set.has(targetb)){
  //     set.add(targetb)
  //    const arr = Array.from(set).sort((a, b) => a - b);
    
  //    console.log(arr)
  //    for(let j = 0; j < arr.length; j++){
  //     console.log(j)
  //     if(arr[j] === targetb) return j
  //    }
  //   }
  //   console.log(set)
  //  }
  };

  console.log(searchInsert(numsb, targetb))

  const x = 4
  var mySqrt = function (x) {
   let low = 0;
   let  high = x;
   while (low <= high){
    const mid = Math.floor((low + high) / 2)
    const sqr = mid * mid
    if(sqr <= x) low= mid + 1
    else high = mid - 1
    
   }
   return high;
  };
  console.log(mySqrt(x));

  const arrA = [1,2]
  const arrB = [3,4,5]
  function cartesianProduct(arrA, arrB){
    const res = []
    // let i = 0 
    // let j = 0
    // while(arrB.length){
    //   res.push([arrA[i], arrB[j]])
    //   j++
    // }
    // i++
    // console.log(res)
    for(let i = 0; i < arrA.length; i++){
      for(let j = 0; j < arrB.length; j++){
        res.push([arrA[i], arrB[j]])
      }
    }
return res
  }

  console.log(cartesianProduct(arrA, arrB))

  // fibonacci
  function climbingStaircase(n){
    const noOfWays = [1,2]
    for(let i = 2; i <=n; i++){
      noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }
    return noOfWays[n - 1 ]
  }

  function towerOfHanoi(n, fromRod, toRod, usingRod){
    if(n === 1){
      console.log((`Move disk 1 from ${fromRod} to ${toRod}`))
      return
    }
    towerOfHanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n-1, usingRod, toRod, fromRod)
  }

  towerOfHanoi(3, 'A', 'C', 'B')