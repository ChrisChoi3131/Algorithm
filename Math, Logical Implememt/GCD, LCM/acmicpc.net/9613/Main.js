"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
let gcd = (a, b) => {
  while (b !== 0) {
    let tmpA = a;
    let tmpB = b;
    a = tmpB;
    b = tmpA % tmpB;
  }
  return a;
};
for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map((x) => Number(x));
  let ans = 0;
  for (let i = 1; i <= arr[0]; i++) {
    for (let j = i + 1; j <= arr[0]; j++) {
      ans += gcd(arr[i], arr[j]);
    }
  }
  console.log(ans);
}
