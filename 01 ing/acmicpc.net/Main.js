const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const m = Number(input[0]);
const n = 21;
let s = 0;
const ans = [];
for (let i = 1; i <= m; i++) {
  const cmd = input[i].split(' ')[0];
  let x = Number(input[i].split(' ')[1]);
  const set = new Array(n).fill(0);

  if (cmd === 'add') {
    s = s | (1 << x);
  } else if (cmd === 'remove') {
    s = s & ~(1 << x);
  } else if (cmd === 'check') {
    if (1 << x === (s & (1 << x))) ans.push(1);
    else ans.push(0);
  } else if (cmd === 'toggle') {
    s = s ^ (1 << x);
  } else if (cmd === 'all') {
    s = (1 << n) - 1;
  } else if (cmd === 'empty') {
    s = 0;
  }
}
console.log(ans.join('\n'));
