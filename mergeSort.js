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
    let j = 1
    let res = []
    for(let i = 0; i < ma.length; i++){
        res.push((ma[i] - 1) * (ma[j] - 1));

    }
};

console.log(maxProduct(ma));
