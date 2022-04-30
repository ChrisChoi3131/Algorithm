const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, s] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
let cnt = 0;
const sums = {};
go(0, 0);
function go(idx, sum) {
  if (idx === n) {
    sums[sum] = 1;
    return;
  }
  go(idx + 1, sum + nums[idx]);
  go(idx + 1, sum);
}

for (let i = 1; i < Infinity; i++) {
  if (!sums[i]) {
    console.log(i);
    break;
  }
}
