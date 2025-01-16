let prev2 = 0;
let prev1 = 1;

const fibo = () => {
  for (let i = 0; i < 18; i++) {
    let newFibo = prev1 + prev2;
    console.log(newFibo);
    prev2 = prev1;
    prev1 = newFibo;
  }
};

console.log(fibo());

const my_array = [7, 12, 9, 4, 11];

const findTheLowestValue = () => {
  let minVal = my_array[0];
  for (i = 0; i < my_array.length; i++) {
    if (my_array[i] < minVal) {
      minVal = my_array[i];
    }
  }
  return minVal;
};

console.log(findTheLowestValue());

let myArray = [64, 34, 25, 12, 22, 11, 90];

// bubble sort
const findTheLargestValue = () => {
  for (i = 0; i < myArray.length; i++) {
    let swapped = false;
    for (j = 0; j < myArray.length - 1; j++) {
      if (myArray[j] > myArray[j + 1]) {
        let temp = myArray[j];
        myArray[j] = myArray[j + 1];
        myArray[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return myArray;
};

console.log(findTheLargestValue());

const findTheLowest = () => {
  for (i = 0; i < myArray.length; i++) {
    let minIndex = i
    for (j = i + 1; j < myArray.length ; j++) {
      if (myArray[j] < myArray[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
     let temp = myArray[minIndex]
     console.log(temp)
     myArray[minIndex] = myArray[i]
     myArray[i] = temp
    }
  }
  return myArray;
};

console.log(findTheLowest());

const findLowest = () => {
for( i = 1; i< myArray.length; i++){
  let currentValue = myArray[i]
  let inserIndex = i 
  for(j = i - 1; j>=0;  j--){
    if(myArray[j] > currentValue){
      myArray[j+1] = myArray[j]
      inserIndex = j
    }else{
      break
    }
  
  }
   myArray[inserIndex] = currentValue;
}
 return myArray
}

console.log(findLowest())