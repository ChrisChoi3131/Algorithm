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

const d = [];
d[N] = 1;
for (let i = N - 1; i > 0; i--) {
  let max = 0;
  for (let j = i; j < N + 1; j++) {
    if (a[i] > a[j] && max < d[j]) {
      max = d[j];
    }
  }
  d[i] = max + 1;
}
let answer = 0;
for (let i = 1; i < N + 1; i++) {
  if (answer < d[i]) {
    answer = d[i];
  }
}
console.log(answer);
