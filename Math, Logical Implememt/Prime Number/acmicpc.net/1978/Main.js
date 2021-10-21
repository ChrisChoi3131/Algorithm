"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const primes = [];
const N = Number(input[0]);

for (let i = 0; i <= 1000; i++) {
  primes[i] = prime(i);
}
function prime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

const nums = input[1].split(" ").map((x) => Number(x));
let ans = 0;
for (let i = 0; i < N; i++) {
  const num = nums[i];
  if (primes[num]) ans++;
}
console.log(ans);
