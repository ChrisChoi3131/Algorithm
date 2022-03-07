const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
const MOD = 10007;
let d = [[], new Array(10).fill(1)];

for (let i = 2; i <= N; i++) {
  d.push(new Array(10).fill(0));
  for (let j = 0; j <= 9; j++) {
    for (let l = 0; l <= j; l++) {
      d[i][j] += d[i - 1][l] % MOD;
    }
  }
}
console.log(d[N].reduce((p, c) => p + c) % MOD);
