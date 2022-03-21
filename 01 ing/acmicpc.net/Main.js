const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
arr = countNums(arr);
function countNums(arr) {
  let nums = [],
    count = [],
    pre;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (pre !== arr[i]) {
      nums.push(arr[i]);
      count.push(1);
    } else {
      count[count.length - 1]++;
    }
    pre = arr[i];
  }
  return [nums, count];
}
let c = arr[1];
arr = arr[0];
let line = [],
  printArr = [];

function go(idx) {
  if (idx === m) {
    printArr.push(line.join(" "));
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (c[i] === 0) continue;
    c[i]--;
    line[idx] = arr[i];
    go(idx + 1);
    c[i]++;
  }
}
go(0);
console.log(printArr.join("\n"));
