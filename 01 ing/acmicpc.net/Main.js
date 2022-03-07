const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);

let d = [0];
for (let i = 1; i <= N; i++) {
  d.push(Number.MAX_SAFE_INTEGER);
  for (let j = 1; j * j <= i; j++) {
    if (d[i] > d[i - j * j] + 1) d[i] = d[i - j * j] + 1;
  }
}
console.log(d[N]);
