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