const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
let d = new Array(201).fill(0).map(() => new Array(201).fill(0));
const mod = 1000000000;
d[1] = d[1].map((ele, idx) => idx);
for (let i = 0; i < d.length; i++) {
  d[i][1] = 1;
}
for (let i = 2; i < d.length; i++) {
  for (let j = 2; j < d[i].length; j++) {
    d[i][j] = (d[i - 1][j] + d[i][j - 1]) % mod;
  }
}
console.log(d[n][k]);
