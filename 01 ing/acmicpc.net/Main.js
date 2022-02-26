const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input[0]);
let d = [[]];
d.push([0, 1]);
for (let i = 2; i <= N; i++) {
  d.push([]);
  d[i][0] = BigInt(d[i - 1][0] + d[i - 1][1]);
  d[i][1] = BigInt(d[i - 1][0]);
}

console.log((d[N][0] + d[N][1]).toString());
