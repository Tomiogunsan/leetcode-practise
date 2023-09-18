const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];
var sortPeople = function (names, heights) {
  let obj = names.map((name, i) => ({ name: names[i], hgt: heights[i] }));
  obj.sort((a, b) => b.hgt - a.hgt);

  return obj.map((name) => name.name);
};

console.log(sortPeople(names, heights));
