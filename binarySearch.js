 const nums = [1, 2, 5, 2, 3]; 
 const target = 2;

var targetIndices = function (nums, target) {
    let res = []
    const sortNums = nums.sort((a,b) => a-b)
    console.log(sortNums)
    sortNums.map((val, i) => {
        if(val === target){
            res.push(i)
            console.log(res)
            
        }
        
    })
    return res;
};


console.log(targetIndices(nums, target));