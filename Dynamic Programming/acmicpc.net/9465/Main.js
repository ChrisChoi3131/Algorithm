const inputFilePath = "/sample.txt";
var input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

const T = input.shift();

for (let test_case = 0; test_case < T; test_case++) {
  let N = input.shift();
  let a = [[]];
  let line1 = (input.shift().split(" "));
  let line2 = (input.shift().split(" "));
  for (let i = 1; i <= N; i++) {
    a.push([]);
    a[i][1] = parseInt(line1[i - 1]);
    a[i][2] = parseInt(line2[i - 1]);
  }
  let d = [[]];
  d.push([0, a[1][1], a[1][2]])
  for (let j = 2; j <= N; j++) {
    d.push([0, 0, 0]);
    d[j][0] = Math.max(d[j - 1][1], d[j - 1][2]);
    d[j][1] = Math.max(d[j - 1][0], d[j - 1][2]) + a[j][1];
    d[j][2] = Math.max(d[j - 1][0], d[j - 1][1]) + a[j][2];
  }
  console.log(Math.max(Math.max(d[N][0], d[N][1]), d[N][2]));
}
