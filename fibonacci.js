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