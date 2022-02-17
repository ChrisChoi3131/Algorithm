const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let n = Number(input[0]);
let res = [];
for (let i = 2; i * i <= n; i++) {
  while (n % i === 0) {
    res.push(i);
    n /= i;
  }
}
if (n > 1) res.push(n);
console.log(res.join("\n"));
