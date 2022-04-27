const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);
const signs = input[1].split(' ');
const check = new Array(10).fill(false);
let a = new Array(n + 1).fill(0);
let minNum = Infinity;
let maxNum = -Infinity;
for (let num = 0; num < 10; num++) {
  a[0] = num;
  check[num] = true;
  go(1);
  check[num] = false;
}

function go(idx) {
  if (idx === n + 1) {
    let num = 0;
    for (let i = n; i >= 0; i--) {
      num += a[n - i] * Math.pow(10, i);
    }
    maxNum < num ? (maxNum = num) : null;
    minNum > num ? (minNum = num) : null;
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (check[i]) continue;
    if (signs[idx - 1] === '<') {
      if (a[idx - 1] >= i) continue;
    } else if (signs[idx - 1] === '>') {
      if (a[idx - 1] <= i) continue;
    }
    a[idx] = i;
    check[i] = true;
    go(idx + 1);
    check[i] = false;
  }
}
maxNum.toString().length === n + 1 ? console.log(maxNum) : console.log('0' + maxNum);
minNum.toString().length === n + 1 ? console.log(minNum) : console.log('0' + minNum);
