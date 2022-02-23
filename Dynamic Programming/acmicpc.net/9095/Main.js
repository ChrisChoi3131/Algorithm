const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const T = Number(input[0]);

let d = new Array(11);
d[0] = [0, 0, 0, 0];
for (let i = 1; i < 11; i++) {
  d[i] = [0, 0, 0, 0];
  for (let j = 1; j <= 3; j++) {
    if (i < j) continue;
    d[i][j] = d[i - j][1] + d[i - j][2] + d[i - j][3];
    if (i === j) d[i][j] = 1;
  }
}

for (let test_case = 1; test_case <= T; test_case++) {
  let num = Number(input[test_case]);
  console.log(d[num][1] + d[num][2] + d[num][3]);
}
