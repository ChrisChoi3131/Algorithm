const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let [nums, counts] = (function (arr) {
  let nums = [],
    counts = [],
    pre;
  for (let i = 0; i < arr.length; i++) {
    if (pre !== arr[i]) {
      nums.push(arr[i]);
      counts.push(1);
    } else {
      counts[counts.length - 1]++;
    }
    pre = arr[i];
  }
  return [nums, counts];
})(
  input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
);
let printLine = [];
let printNum = [];
function go(idx) {
  if (idx === m) {
    printLine.push(printNum.join(" "));
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    printNum[idx] = nums[i];
    go(idx + 1, nums[i]);
  }
}
go(0);
console.log(printLine.join("\n"));
