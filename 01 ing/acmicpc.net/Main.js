const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(input[0]);
let w = [];
for (let i = 1; i <= n; i++) {
  w.push(input[i].split(" ").map(Number));
}
let currPerm = (function () {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }
  return array;
})();
let numOfPerm = (function () {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
})();

function getDistance() {
  let sumDis = 0;
  let [start, end] = [currPerm[0], currPerm[n - 1]];
  for (let i = 0; i < n - 1; i++) {
    let [from, to] = [currPerm[i], currPerm[i + 1]];
    if (w[from][to] !== 0) {
      sumDis += w[from][to];
    } else {
      return 0;
    }
  }
  return w[end][start] !== 0 ? sumDis + w[end][start] : 0;
}
function findNextPerm() {
  let idx = n - 1;
  for (let i = n - 1; i > 0; i--) {
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
  let tmp = currPerm[idx];
  currPerm[idx] = currPerm[idx2];
  currPerm[idx2] = tmp;
  currPerm = currPerm.slice(0, idx + 1).concat(currPerm.slice(idx + 1).reverse());
  return true;
}
let ans = getDistance() !== 0 ? getDistance() : Number.MAX_SAFE_INTEGER;
for (let i = 0; i < numOfPerm; i++) {
  if (findNextPerm()) {
    if (currPerm[0] !== 0) break;
    let dis = getDistance();
    if (ans > dis && dis !== 0) ans = getDistance();
  } else {
    break;
  }
}
console.log(ans);
