const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);

let dl = new Array(N).fill(0),
  dr = new Array(N).fill(0);
dl[0] = A[0];
dr[N - 1] = A[N - 1];
for (let i = 1; i < N; i++) {
  dl[i] = Math.max(dl[i - 1], 0);
  dl[i] += A[i];
}
for (let i = N - 2; i >= 0; i--) {
  dr[i] = Math.max(dr[i + 1], 0);
  dr[i] += A[i];
}

let ans = Math.max(...dl);
for (let i = 1; i < N - 1; i++) {
  ans < dl[i - 1] + dr[i + 1] ? (ans = dl[i - 1] + dr[i + 1]) : "";
}
console.log(ans);
