const names = ["Mary", "John", "Emma"] 
const heights = [180, 165, 170];
var sortPeople = function (names, heights) {
 return  names.map((item,i) => item + heights[i]).sort((a,b) => b-a) 

};
console.log(heights.sort((a,b) => b-a))

console.log(sortPeople(names, heights))