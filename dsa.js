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

function naiveSearch(long, short){
  let count = 0;
  for(let i = 0; i < long.length; i++){
    for(let j = 0; j < short.length; j++){
    console.log(j, i + j)
    if(short[j] !== long[i + j]){
      console.log("break")
      break;
    }
    if(j === short.length - 1){
      count++
    }
    }
  }
  return count
}

naiveSearch("lorie loled", "lol")

// bubble sort
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j]);
      if(arr[j] > arr[j + 1]){
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort([15,34,10,18,50]))

// selection sort
function selectionSort(arr){
  for(var i = 0; i < arr.length; i++){
    var lowest = i;
    for(var j = i+ 1; j < arr.length; j++){
      if(arr[j] < arr[lowest]){
        lowest = j
      }
    }
    if(i !== lowest){
      var temp = arr[i];
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr;
}

console.log(selectionSort([0,2,43,5,75,18,21]));

// insertion sort
function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){
    var currentVal = arr[i];
    for(var j = i - 1; j>=0 && arr[j] > currentVal; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal
  }
  return arr;
}

console.log(insertionSort([2,1,9,76,4]))

// quicksort
function pivot(arr, start = 0, end = arr.length - 1){
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  };
  //  we are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for(let i = start + 1; i<=end; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr, swapIdx, i)
    }
  }

  // swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1){
  if(left < right){
    let pivotIndex = pivot(arr, left, right)
    // left
    quickSort(arr, left, pivotIndex - 1)
    // right
    quickSort(arr, pivotIndex+ 1, right)
  }
  return arr;
}

console.log(quickSort([4,6,9,1,2,5]))

// another implementation of quicksort
function quickSortB(arr){
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for(let i = 0; i< arr.length - 1; i++){
    if(arr[i] < pivot){
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }
  return [...quickSortB(left), pivot, ...quickSortB(right)]
}