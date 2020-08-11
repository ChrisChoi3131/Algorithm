const inputFilePath = "/sample.txt";
let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

let N = input.shift();
let a = input[0].split(" ").map(item => {
  return parseInt(item)
});
a.unshift(0);
let d1 = [0];
let d2 = [];

for (let i = 1; i <= N; i++) {
  d1[i] = a[i];
  d1[i] = Math.max(a[i], d1[i - 1] + a[i]);
}
for (let i = N; i > 0; i--) {
  d2[i] = a[i];
  if (i < N) {
    d2[i] = Math.max(d2[i], d2[i + 1] + a[i]);
  }
}

let answer = d1[1];
for (let i = 1; i <= N; i++) {
  if (answer < d1[i]) {
    answer = d1[i];
  }
}
for (let i = 1; i <= N - 1; i++) {
  if (answer < d1[i - 1] + d2[i + 1]) {
    answer = d1[i - 1] + d2[i + 1];
  }
}
console.log(answer);
