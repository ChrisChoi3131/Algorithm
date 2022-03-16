const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let heights = input.map(Number);
let total = heights.reduce((p, c) => p + c);
let indexs = [];
outer: for (let i = 0; i < heights.length; i++) {
  for (let j = 0; j < heights.length; j++) {
    if (i !== j) {
      let check = total - heights[i] - heights[j] === 100 ? true : false;
      if (check) {
        indexs.push(i, j);
        break outer;
      }
    }
  }
}
let ans = [];
heights.forEach((ele, idx) => {
  if (indexs.indexOf(idx) === -1) ans.push(ele);
});
console.log(ans.sort((a, b) => a - b).join("\n"));
