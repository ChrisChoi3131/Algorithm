const inputFilePath = "/sample.txt";
var input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());
const a = [0];
for (let i = 0; i < N; i++) {
  a.push(parseInt(input[i]));
}
const d = [[]];

d.push([0, a[1], a[1]]);

for (let i = 2; i <= N; i++) {
  d.push([0, 0, 0]);
  d[i][0] = Math.max(Math.max(d[i - 1][0], d[i - 1][1]), d[i - 1][2]);
  d[i][1] = d[i - 1][0] + parseInt(a[i]);
  d[i][2] = d[i - 1][1] + parseInt(a[i]);
}

console.log(Math.max(Math.max(d[N][0], d[N][1]), d[N][2]));
