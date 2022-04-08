const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const n = Number(input[0]);

const d = [1, 0, 3];
for (let i = 3; i <= n; i++) {
  if (i % 2 === 1) d[i] = 0;
  else {
    d[i] = d[2] * d[i - 2];
    for (let j = i - 4; j >= 0; j -= 2) {
      d[i] += d[j] * 2;
    }
  }
}
console.log(d[n]);
