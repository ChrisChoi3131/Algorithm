const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);

let a = [];
for (let i = 1; i <= N; i++) {
  a.push(input[i].split(" ").map(Number));
}
let d = [[a[0][0]]];
for (let i = 1; i < N; i++) {
  d.push([]);
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      d[i][j] = d[i - 1][j] + a[i][j];
    } else if (j === i) {
      d[i][j] = d[i - 1][j - 1] + a[i][j];
    } else {
      d[i][j] = Math.max(d[i - 1][j], d[i - 1][j - 1]) + a[i][j];
    }
  }
}
console.log(Math.max(...d[N - 1]));
