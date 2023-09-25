// frequency counter
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then its not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram("qwerty", "qeywrt");
const num1 = "22";
const num2 = "222";
function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) return false;
  const lookup = {};
  for (let i of num1) {
    lookup[i] = lookup[i] + 1 || 1;
  }
  for (let j of num2) {
    if (!lookup[j]) {
      return false;
    } else {
      lookup[j] -= 1;
    }
    return true;
  }
}
console.log(sameFrequency(num1, num2));

const dupli = [1, 2, 2];
function areThereDuplicates(dupli) {
  const lookup = {};
  for (let i of dupli) {
    lookup[i] = lookup[i] + 1 || 1;
    console.log(lookup);
  }
  for (let keys in lookup) {
    if (lookup[keys] > 1) return true;
  }
  return false;
}


// multiple pointers pattern
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

countUniqueValues([1, 1, 1, 1, 1, 2]);
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

const avg = [-1, 0, 3, 4, 5, 6],
  n = 4.1;
function averagePair(avg, n) {
  let i = 0;
  for (let j = 1; j < avg.length; j++) {
    let average = (avg[i] + avg[j]) / 2;
    if (average === n) {
      return true;
    }
    i++;
  }
  return false;
}

const str1 = "abc",
  str2 = "abracadabra";
function isSubsequence(str1, str2) {
let j = 0, i = 0
while(i< str1.length){
    if(j===str2.length){
        return false
    }
    if(str1[i] === str2[j]){
        i++
    }
    j++
}
return true

}


// sliding window
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}


const ns = 5
let value = [
  [5],
  [3, "ccccc"],
  [1, "aaaaa"],
  [2, "bbbbb"],
  [5, "eeeee"],
  [4, "ddddd"],
];
class OrderedStream{
  constructor(ns){
this.pointer = 0
this.newarr = []
this.newarr.length = ns
  }
  insert(idkey, value){
    let result = []
    this.newarr[idkey -1] = value
    while(this.newarr[this.pointer]){
      result.push(this.newarr[this.pointer])
      this.pointer++
      console.log(result);
    }
    return result
  }
}

// binary search
function binarySearch(arr, elem){
  let start = 0;
  let end = arr.length - 1
  let middle = Math.floor((start + end)/ 2)
  while(arr[middle] !== elem && start <= end){
    if(elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end)/2)
  }
  return arr[middle] === elem ? middle : -1
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 5))