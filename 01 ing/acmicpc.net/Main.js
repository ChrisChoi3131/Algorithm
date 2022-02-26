const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input[0]);
const MOD = 1000000000;
let d = [[]];
d.push([0, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

for (let i = 2; i <= N; i++) {
  d.push([]);
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      d[i][j] = d[i - 1][1] % MOD;
    } else if (j === 9) {
      d[i][j] = d[i - 1][8] % MOD;
    } else {
      d[i][j] = (d[i - 1][j - 1] + d[i - 1][j + 1]) % MOD;
    }
  }
}
console.log(d[N].reduce((p, c) => p + c) % MOD);
