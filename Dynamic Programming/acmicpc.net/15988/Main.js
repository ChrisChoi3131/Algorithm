const inputFilePath = "/sample.txt";
var input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

const T = input[0];
const NUMBER = 1000000009;
let d = [];
d.push([1, 0, 0]);
d.push([1, 1, 0]);
d.push([2, 1, 1]);

for (let i = 3; i < 1000001; i++) {
  let tempArr = [];
  for (let j = 1; j <= 3; j++) {
    tempArr.push((d[i - j][0] + d[i - j][1] + d[i - j][2]) % NUMBER);
  }
  d.push(tempArr);
}
for (let i = 0; i < T; i++) {
  console.log(d[input[i + 1]][0] % NUMBER);
}
