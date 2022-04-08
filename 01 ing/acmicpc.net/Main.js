const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const n = Number(input[0]);
const t = new Array(n + 1);
for (let i = 1; i <= n; i++) {
  t[i] = input[i].split(" ").map(Number);
}
const d = new Array(n + 1).fill(0);
if (t[1][0] - 1 < n) d[1] = t[1][1];
for (let i = 2; i <= n; i++) {
  for (let j = 1; j < i; j++) {
    if (i - j - t[j][0] >= 0) {
      d[i] = Math.max(d[j], d[i]);
    }
  }
  if (i + t[i][0] - 1 <= n) d[i] += t[i][1];
}
console.log(Math.max(...d));
