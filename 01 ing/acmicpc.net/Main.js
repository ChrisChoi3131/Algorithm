const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);

let forD = new Array(N).fill(0);
let backD = new Array(N).fill(0);
forD[0] = 1;
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && forD[j] >= forD[i]) forD[i] = forD[j];
  }
  forD[i]++;
}
for (let i = N - 1; i >= 0; i--) {
  for (let j = N - 1; j > i; j--) {
    if (A[i] > A[j] && backD[j] > backD[i]) backD[i] = backD[j];
  }
  backD[i]++;
}
console.log(
  Math.max(
    ...forD.map((num, idx) => {
      return num + backD[idx];
    })
  ) - 1
);
