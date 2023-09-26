const nums = [1, 2, 5, 2, 3];
const target = 2;

var targetIndices = function (nums, target) {
  let res = [];
  const sortNums = nums.sort((a, b) => a - b);

  sortNums.map((val, i) => {
    if (val === target) {
      res.push(i);
    }
  });
  return res;
};

console.log(targetIndices(nums, target));

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
var countNegatives = function (grid) {
  let count = 0;
  const res = grid.map((item) => item.sort((a, b) => a - b));

  res.map((val) => {
    val.map((element) => {
      console.log(element);
      if (element <= -1) {
        console.log(element);
        count++;
      }
    });
  });

  return count;
};

console.log(countNegatives(grid));
