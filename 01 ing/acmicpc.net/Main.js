const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);
const maxOperators = input[2].split(' ').map(Number);
const mapOperators = { 0: '+', 1: '-', 2: '*', 3: '/' };
const cntOperators = [0, 0, 0, 0];
const operators = [];
let maxNum = -Infinity;
let minNum = Infinity;
go(0);
function go(idx) {
  if (idx === n - 1) {
    let num = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
      const operator = mapOperators[operators[i]];
      operator === '+' ? (num = num + nums[i + 1]) : null;
      operator === '-' ? (num = num - nums[i + 1]) : null;
      operator === '*' ? (num = num * nums[i + 1]) : null;
      if (operator === '/') {
        const rem = num % nums[i + 1];
        num = (num - rem) / nums[i + 1];
      }
    }
    maxNum < num ? (maxNum = num) : null;
    minNum > num ? (minNum = num) : null;
    return;
  }

  for (const operator in mapOperators) {
    if (cntOperators[operator] < maxOperators[operator]) {
      cntOperators[operator]++;
      operators[idx] = operator;
      go(idx + 1);
      cntOperators[operator]--;
    }
  }
}
console.log(maxNum);
console.log(minNum);
