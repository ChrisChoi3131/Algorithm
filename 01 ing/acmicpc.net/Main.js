const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);

let d = new Array(N).fill(0);
d[0] = A[0];

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && d[i] <= d[j]) {
      d[i] = d[j];
    }
  }
  d[i] += A[i];
}
console.log(Math.max(...d));
