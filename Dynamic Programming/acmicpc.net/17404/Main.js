const inputFilePath = "/sample.txt";
let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

let N = input.shift();
let a = [];
let d = [];
for (let i = 0; i < N; i++) {
  d.push([]);
  a[i] = input[i].split(' ').map(item => {
    return parseInt(item);
  });
}
a.unshift([]);
d.unshift([]);
let answer = 999999;
for (let i = 0; i <= 2; i++) {
  for (let k = 0; k <= 2; k++) {
    if (i === k) {
      d[1][k] = a[1][i];
    } else {
      d[1][k] = 99999999;
    }
  }
  let minValue = 9999999;
  for (let j = 2; j <= N; j++) {
    d[j][0] = Math.min(d[j - 1][1], d[j - 1][2]) + a[j][0];
    d[j][1] = Math.min(d[j - 1][0], d[j - 1][2]) + a[j][1];
    d[j][2] = Math.min(d[j - 1][0], d[j - 1][1]) + a[j][2];
  }
  for (let k = 0; k <= 2; k++) {
    if (i === k) continue;
    minValue = Math.min(minValue, d[N][k]);
  }
  if (answer > minValue) {
    answer = minValue;
  }
}
console.log(answer);
