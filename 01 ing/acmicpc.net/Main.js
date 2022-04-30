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
go(0, 0);
function go(idx, sum) {
  if (idx === n) {
    if (sum === s) cnt++;
    return;
  }
  go(idx + 1, sum + nums[idx]);
  go(idx + 1, sum);
}
s === 0 ? cnt-- : null;
console.log(cnt);
