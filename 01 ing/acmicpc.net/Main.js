const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const T = Number(input[0]);
let ans = [];
for (let test_case = 1; test_case <= T; test_case++) {
  const idx = (test_case - 1) * 3;
  const N = Number(input[1 + idx]);
  const A = [input[idx + 2].split(" ").map(Number), input[idx + 3].split(" ").map(Number)];
  let d = [[A[0][0]], [A[1][0]], [0]];
  for (let i = 1; i < N; i++) {
    d[0][i] = Math.max(d[1][i - 1], d[2][i - 1]) + A[0][i];
    d[1][i] = Math.max(d[0][i - 1], d[2][i - 1]) + A[1][i];
    d[2][i] = Math.max(d[0][i - 1], d[1][i - 1], d[2][i - 1]);
  }
  ans.push(Math.max(d[0][N - 1], d[1][N - 1], d[2][N - 1]));
}
console.log(ans.join("\n"));
