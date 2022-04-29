const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);
const words = input.splice(1, n + 1).map(word => word.split(''));
const checkNums = new Array(10).fill(false);
const map = {};
const nums = [];
words.forEach(word => {
  word.map(char => (map[char] = -1));
});
let maxSum = -Infinity;
const alphabets = Object.keys(map);
const end = alphabets.length === 9 ? 0 : 10 - alphabets.length;
go(0);
console.log(maxSum);
function go(idx) {
  if (idx === alphabets.length) {
    for (let i = 0; i < alphabets.length; i++) {
      map[alphabets[i]] = nums[i];
    }
    let sum = 0;
    words.forEach(word => {
      for (let i = 0; i < word.length; i++) {
        sum += map[word[i]] * Math.pow(10, word.length - i - 1);
      }
    });
    maxSum < sum ? (maxSum = sum) : null;
    return;
  }

  for (let i = 9; i >= end; i--) {
    if (checkNums[i] === true) continue;
    checkNums[i] = true;
    nums[idx] = i;
    go(idx + 1);
    checkNums[i] = false;
  }
}
