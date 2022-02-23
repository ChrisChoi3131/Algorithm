const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input[0]);
let P = input[1].split(" ").map(Number);
P.unshift(0);
let d = [...P];
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    if (d[i] > d[i - j] + P[j]) {
      d[i] = d[i - j] + P[j];
    }
  }
}
console.log(d[N]);
