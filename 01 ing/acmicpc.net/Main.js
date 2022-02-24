const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const T = Number(input[0]);
const num = 1000000009;
let ans = [];
let d = [];
d.push([0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 1, 1, 1]);
for (let i = 4; i <= 100000; i++) {
  d.push([0, (d[i - 1][2] + d[i - 1][3]) % num, (d[i - 2][1] + d[i - 2][3]) % num, (d[i - 3][1] + d[i - 3][2]) % num]);
}

for (let test_case = 1; test_case <= T; test_case++) {
  let N = Number(input[test_case]);
  ans.push((d[N][1] + d[N][2] + d[N][3]) % num);
}
console.log(ans.join("\n"));
