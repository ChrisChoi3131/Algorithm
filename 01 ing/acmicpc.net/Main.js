const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const MOD = 1000000009;
const T = Number(input[0]);
let d = new Array(1000001).fill(0);
d[1] = 1;
d[2] = 2;
d[3] = 4;
for (let i = 4; i < d.length; i++) {
  d[i] = (d[i - 1] + d[i - 2] + d[i - 3]) % MOD;
}
for (let test_case = 1; test_case <= T; test_case++) {
  let n = Number(input[test_case]);
  console.log(d[n]);
}
