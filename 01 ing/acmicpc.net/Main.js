const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map((num) => Number(num));

let d = [];

d.push(A[0]);
for (let i = 1; i < N; i++) {
  d.push(Math.max(d[i - 1] + A[i], A[i]));
}
console.log(Math.max(...d));
