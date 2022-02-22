const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
let d = [];
d[0] = d[1] = 1;
for (let i = 2; i <= N; i++) {
  d[i] = (d[i - 1] + d[i - 2]) % 10007;
}
console.log(d[N]);
