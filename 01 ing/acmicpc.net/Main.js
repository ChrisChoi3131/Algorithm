const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const T = Number(input[0]);
let ans = [];
for (let test_case = 1; test_case <= T; test_case++) {
  let [M, N, X, Y] = input[test_case].split(" ").map(Number);
  let check = false;
  X--;
  Y--;
  for (let i = X; i < N * M; i += M) {
    if (i % N === Y) {
      check = true;
      ans.push(i + 1);
      break;
    }
  }
  if (!check) ans.push(-1);
}
console.log(ans.join("\n"));
