const inputFilePath = "/sample.txt";
var input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

const N = input;
const MOD = 9901;

const d = [[1, 1, 1]];

for (let i = 1; i < N; i++) {
  d.push([]);
  d[i][0] = (d[i - 1][0] + d[i - 1][1] + d[i - 1][2]) % MOD;
  d[i][1] = (d[i - 1][0] + d[i - 1][2]) % MOD;
  d[i][2] = (d[i - 1][0] + d[i - 1][1]) % MOD;
}

console.log((d[N - 1][0] + d[N - 1][1] + d[N - 1][2]) % MOD);
