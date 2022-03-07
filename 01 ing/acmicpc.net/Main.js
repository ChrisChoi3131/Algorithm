const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
let d = new Array(N + 1).fill().map((e) => [0, 0, 0]);
const A = [[0, 0, 0]];

for (let i = 1; i <= N; i++) {
  A.push(input[i].split(" ").map(Number));
  d[i][0] = Math.min(d[i - 1][1], d[i - 1][2]) + A[i][0];
  d[i][1] = Math.min(d[i - 1][0], d[i - 1][2]) + A[i][1];
  d[i][2] = Math.min(d[i - 1][0], d[i - 1][1]) + A[i][2];
}
console.log(Math.min(...d[N]));
