const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
const n = Number(input[0]);
input[1] = input[1].split("");
const matrix = new Array(n).fill(0).map(() => new Array(n));
let idx = 0;
const ans = [];
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    matrix[i][j] = input[1][idx++];
  }
}

go(0);
console.log(ans.join(" "));
function go(index) {
  if (index === n) return true;
  if (matrix[index][index] === "0") {
    ans[index] = 0;
    return checkAns(index) && go(index + 1);
  }
  for (let i = 1; i <= 10; i++) {
    if (matrix[index][index] === "+") {
      ans[index] = i;
    } else if (matrix[index][index] === "-") {
      ans[index] = -i;
    }
    if (checkAns(index) && go(index + 1)) return true;
  }
  return false;
}

function checkAns(index) {
  let sum = 0;
  for (let i = index; i >= 0; i--) {
    sum += ans[i];
    if (matrix[i][index] === "0") {
      if (sum !== 0) return false;
    } else if (matrix[i][index] === "+") {
      if (sum <= 0) return false;
    } else if (matrix[i][index] === "-") {
      if (sum >= 0) return false;
    }
  }
  return true;
}
