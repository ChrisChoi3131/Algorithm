const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let n = Number(input[0]);
let permutation = input[1].split(" ").map(Number);

function findNextPermutation() {
  let idx = n - 1;
  for (let i = n - 1; i > 0; i--) {
    if (permutation[i - 1] < permutation[i]) {
      idx = i - 1;
      break;
    }
  }
  if (idx === n - 1) return false;
  let idx2 = 0;
  for (let i = n - 1; i > 0; i--) {
    if (permutation[i] > permutation[idx]) {
      idx2 = i;
      break;
    }
  }
  let temp = permutation[idx];
  permutation[idx] = permutation[idx2];
  permutation[idx2] = temp;
  permutation = permutation.slice(0, idx + 1).concat(permutation.slice(idx + 1).reverse());
  return true;
}
findNextPermutation() ? console.log(permutation.join(" ")) : console.log(-1);
