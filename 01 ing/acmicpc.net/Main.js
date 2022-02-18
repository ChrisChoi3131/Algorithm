const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
let d = new Array(N + 1);
d[1] = 0;

for (let i = 2; i <= N; i++) {
  d[i] = d[i - 1];
  if (i % 2 == 0 && d[i] > d[i / 2]) d[i] = d[i / 2];
  if (i % 3 == 0 && d[i] > d[i / 3]) d[i] = d[i / 3];
  d[i]++;
}
console.log(d[N]);
