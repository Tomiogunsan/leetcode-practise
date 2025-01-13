let prev2 = 0
let prev1 = 1

const fibo = () => {
    for (let i = 0; i < 18; i++) {
      let newFibo = prev1 + prev2;
      console.log(newFibo);
      prev2 = prev1;
      prev1 = newFibo;
    }
}

console.log(fibo())


const my_array = [7, 12, 9, 4, 11];

const findTheLowestValue = () => {
    let minVal = my_array[0];
    for(i = 0; i < my_array.length; i++){
        if(my_array[i] < minVal){
            minVal = my_array[i];
        }
       
    }
     return minVal;
}

console.log(findTheLowestValue())


let myArray = [64, 34, 25, 12, 22, 11, 90]; 

// bubble sort
const findTheLargestValue = () => {
    for( i = 0; i < myArray.length; i++){
        for(j = 0; j < myArray.length - 1; j++){
            if(myArray[j] > myArray[j + 1]){
                let temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;
            }
        }
    }
    return myArray
}

console.log(findTheLargestValue())