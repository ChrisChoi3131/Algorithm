const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
let d = [];
let a = [];
let ans = Number.MAX_SAFE_INTEGER;
for (let i = 1; i <= N; i++) {
  a.push(input[i].split(" ").map(Number));
}
for (let i = 0; i < 3; i++) {
  d = [[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]];
  d[0][i] = a[0][i];
  for (let j = 1; j < N; j++) {
    d.push([]);
    d[j][0] = Math.min(d[j - 1][1], d[j - 1][2]) + a[j][0];
    d[j][1] = Math.min(d[j - 1][0], d[j - 1][2]) + a[j][1];
    d[j][2] = Math.min(d[j - 1][0], d[j - 1][1]) + a[j][2];
  }
  ans = Math.min(
    ans,
    ...d[N - 1].map((num, idx) => {
      return idx !== i ? num : Number.MAX_SAFE_INTEGER;
    })
  );
}
console.log(ans);
