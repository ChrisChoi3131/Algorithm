const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let n = Number(input[0]);
let currPerm = new Array(n).fill(1).map((x, idx) => x + idx);

let numOfPerms = (function () {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
})();

function findNextPerm() {
  let idx = n - 1;
  for (let i = n - 1; i > 0; i--) {
    if (currPerm[i - 1] < currPerm[i]) {
      idx = i - 1;
      break;
    }
  }
  let idx2 = n - 1;
  for (let i = n - 1; i > idx; i--) {
    if (currPerm[idx] < currPerm[i]) {
      idx2 = i;
      break;
    }
  }
  let temp = currPerm[idx];
  currPerm[idx] = currPerm[idx2];
  currPerm[idx2] = temp;
  currPerm = currPerm.slice(0, idx + 1).concat(currPerm.slice(idx + 1).reverse());
  return currPerm.join(" ");
}
let ans = [currPerm.join(" ")];
for (let i = 0; i < numOfPerms - 1; i++) {
  ans.push(findNextPerm());
}
console.log(ans.join("\n"));
