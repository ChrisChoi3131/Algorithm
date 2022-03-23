const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(input[0]);
let currPerm = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let numOfPerms = (function () {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
})();

function findNextPerm() {
  let idx = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (currPerm[i - 1] < currPerm[i]) {
      idx = i - 1;
      break;
    }
  }
  if (idx === n - 1) return false;
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
  return true;
}
function formula() {
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += Math.abs(currPerm[i] - currPerm[i + 1]);
  }
  return sum;
}
let ans = formula();
for (let i = 0; i < numOfPerms; i++) {
  let isFindedPerm = findNextPerm();
  if (isFindedPerm) {
    let resultFormula = formula();
    if (resultFormula > ans) ans = resultFormula;
  }
}
console.log(ans);
