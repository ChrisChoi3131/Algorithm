const inputFilePath = "/sample.txt";
var input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");
const N = input.shift();

const a = [[]];
for (let i = 0; i < N; i++) {
  a.push(
    input[i].split(" ").map((item) => {
      return parseInt(item);
    })
  );
}
const initArray = [];
initArray.push(0);
for (let i = 1; i <= N; i++) {
  initArray.push(0);
  for (let j = i + 1; j < N; j++) {
    a[i][j] = 0;
  }
}

const d = [[]];
d[1] = [...initArray];
d[1][1] = a[1][0];

for (let i = 2; i <= N; i++) {
  d[i] = [...initArray];
  for (let j = 1; j <= i; j++) {
    d[i][j] = Math.max(d[i - 1][j - 1], d[i - 1][j]) + a[i][j - 1];
  }
}
let answer = 0;
for (let i = 1; i <= N; i++) {
  if (answer < d[N][i]) {
    answer = d[N][i];
  }
}
console.log(answer);
