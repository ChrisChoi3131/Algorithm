const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(' ').map(Number);
const paper = [];
for (let i = 1; i <= n; i++) {
  paper.push(input[i].split('').map(Number));
}

let ans = 0;
for (let s = 0; s < 1 << (n * m); s++) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let cur = 0;
    for (let j = 0; j < m; j++) {
      const k = i * m + j;
      if ((s & (1 << k)) === 0) {
        cur = cur * 10 + paper[i][j];
      } else {
        sum += cur;
        cur = 0;
      }
    }
    sum += cur;
  }
  for (let j = 0; j < m; j++) {
    let cur = 0;
    for (let i = 0; i < n; i++) {
      const k = i * m + j;
      if ((s & (1 << k)) !== 0) {
        cur = 10 * cur + paper[i][j];
      } else {
        sum += cur;
        cur = 0;
      }
    }
    sum += cur;
  }
  ans < sum ? (ans = sum) : null;
}
console.log(ans);
