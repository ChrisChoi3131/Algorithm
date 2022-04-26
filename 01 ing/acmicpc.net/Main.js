const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let cnt = 0;
for (let i = 1; i < 1 << n; i++) {
  let sum = 0;
  for (let j = 0; j < n; j++) {
    if (i & (1 << j)) sum += arr[j];
  }
  if (s === sum) cnt++;
}
console.log(cnt);
