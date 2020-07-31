const inputFilePath = "/sample.txt";
var input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");
const N = input.shift();

const a = input[0].split(" ").map(item => {
  return parseInt(item);
});
a.unshift(0)

const d = [[]];
d.push([0, a[1]]);

for (let i = 2; i <= N; i++) {
  d.push([]);
  d[i][0] = Math.max(d[i - 1][0], d[i - 1][1]);
  let max = 0;
  for (let j = 1; j <= i; j++) {
    if (a[i] > a[j] && max < d[j][1]) {
      max = d[j][1];
    }
  }
  d[i][1] = max + a[i];
}
console.log(Math.max(d[N][0], d[N][1]));
