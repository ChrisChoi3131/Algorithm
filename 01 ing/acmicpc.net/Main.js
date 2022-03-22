const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let n = Number(input[0]);
let currPerm = input[1].split(" ").map(Number);

function findPrevPerm() {
  let idx = n - 1;
  for (let i = n - 1; i > 0; i--) {
    if (currPerm[i - 1] > currPerm[i]) {
      idx = i - 1;
      break;
    }
  }
  if (idx === n - 1) return false;
  currPerm = currPerm.slice(0, idx + 1).concat(currPerm.splice(idx + 1).reverse());
  let idx2 = n - 1;
  for (let i = n - 1; i >= idx; i--) {
    if (currPerm[idx] > currPerm[i]) {
      idx2 = i;
    }
  }
  let temp = currPerm[idx];
  currPerm[idx] = currPerm[idx2];
  currPerm[idx2] = temp;
  return true;
}

// splice slice compare
findPrevPerm() ? console.log(currPerm.join(" ")) : console.log(-1);
