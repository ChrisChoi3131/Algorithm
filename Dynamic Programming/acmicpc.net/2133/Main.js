const inputFilePath = "/sample.txt";
let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");
let N = input.shift();
let d = [1, 0];

for (let i = 2; i <= N; i++) {
  d[i] = 0;
  d[i] += 3 * d[i - 2];
  for (let j = 4; j <= i; j += 2) {
    d[i] += 2 * d[i - j];
  }
}
console.log(d[N]);