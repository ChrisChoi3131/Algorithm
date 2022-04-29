const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const ans = [];
let check = [];
let arr = [];
let map = {};
for (let i = 0; i < input.length - 1; i++) {
  map = {};
  const s = input[i].split(' ').map(Number).splice(1, input[i].split(' ').length);
  s.forEach((element, idx) => {
    map[idx] = element;
  });
  check = new Array(s.length).fill(false);
  arr = [];
  go(s, 0, 0);
  console.log('');
}

function go(s, idx, start) {
  if (idx === 6) {
    const line = [];
    arr.map(idx => line.push(map[idx]));
    console.log(line.join(' '));
    return;
  }
  for (let i = 0; i < s.length; i++) {
    if (check[i]) continue;
    if (arr[idx - 1] > i) continue;
    check[i] = true;
    arr[idx] = i;
    go(s, idx + 1);
    check[i] = false;
  }
}
