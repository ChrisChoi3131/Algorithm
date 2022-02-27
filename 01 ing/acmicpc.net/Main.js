const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map((num) => Number(num));
let d = new Array(N).fill(1);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i] && d[j] >= d[i]) {
      d[i] = d[j] + 1;
    }
  }
}

console.log(d.reduce((p, c) => (p > c ? p : c)));
