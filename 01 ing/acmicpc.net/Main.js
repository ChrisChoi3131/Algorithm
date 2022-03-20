const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input[0]);
const N_Len = N.toString().length - 1;
let idx = 0,
  length = 0;
while (idx < N_Len) {
  length += 9 * Math.pow(10, idx) * (idx + 1);
  idx++;
}
length += (N - Math.pow(10, N_Len) + 1) * (N_Len + 1);
console.log(length);
