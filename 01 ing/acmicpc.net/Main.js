const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let check = new Array(1000001).fill(false);
let primes = [];

for (let i = 2; i < 1000001; i++) {
  if (check[i] === false) {
    primes.push(i);
    let j = i + i;
    while (j <= 1000000) {
      check[j] = true;
      j += i;
    }
  }
}
const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  const N = Number(input[i]);
  let ans = 0;
  for (const aPrime of primes) {
    if (N - aPrime >= 2 && N >= 2 * aPrime) {
      if (check[N - aPrime] === false) {
        ans++;
      }
    } else {
      break;
    }
  }
  console.log(ans);
}
