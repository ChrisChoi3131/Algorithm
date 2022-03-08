const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
let a = [0];
for (let i = 1; i <= N; i++) {
  a.push(Number(input[i]));
}
let d = [[0, 0, 0]];
d.push([0, a[1], a[1]]);
for (let i = 2; i <= N; i++) {
  d.push([]);
  d[i][0] = Math.max(...d[i - 1]);
  d[i][1] = d[i - 1][0] + a[i];
  d[i][2] = d[i - 1][1] + a[i];
}

console.log(Math.max(...d[N]));
