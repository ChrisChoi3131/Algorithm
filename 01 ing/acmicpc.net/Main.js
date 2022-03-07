const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
const MOD = 9901;
let d = [[], [1, 1, 1]];
for (let i = 2; i <= N; i++) {
  d.push([[0, 0, 0]]);
  d[i][0] = (d[i - 1][0] + d[i - 1][1] + d[i - 1][2]) % MOD;
  d[i][1] = (d[i - 1][0] + d[i - 1][2]) % MOD;
  d[i][2] = (d[i - 1][0] + d[i - 1][2]) % MOD;
}
console.log(d[N].reduce((p, c) => p + c) % MOD);
