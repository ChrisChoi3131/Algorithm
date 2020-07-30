const inputFilePath = "/sample.txt";
var input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const MOD = 10007;

let d = [];
d.push([]);
d.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);


for (let i = 2; i <= N; i++) {
  d.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  for (let j = 0; j <= 9; j++) {
    for (let k = 0; k <= j; k++) {
      d[i][j] = (d[i][j] + d[i - 1][k]) % MOD;
    }
  }
}
let answer = 0;
for (let i = 0; i < 10; i++) {
  answer = (answer + d[N][i]) % MOD;
}

console.log(answer, d);