const inputFilePath = "/sample.txt";
var input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());
const a = input[0].split(" ").map((item) => {
  return parseInt(item);
});
a.unshift(0);
const d1 = [];
const d2 = [];

d1[1] = 1;
d2[N] = 1;

for (let i = 2; i < N + 1; i++) {
  let max = 0;
  for (let j = 1; j < i; j++) {
    if (a[i] > a[j] && max < d1[j]) {
      max = d1[j];
    }
  }
  d1[i] = max + 1;
}

for (let i = N; i > 0; i--) {
  let max = 0;
  for (let j = i; j < N + 1; j++) {
    if (a[i] > a[j] && max < d2[j]) {
      max = d2[j];
    }
  }
  d2[i] = max + 1;
}

let answer = 0;
for (let i = 1; i < N + 1; i++) {
  if (answer < d1[i] + d2[i] - 1) {
    answer = d1[i] + d2[i] - 1;
  }
}
console.log(answer);
