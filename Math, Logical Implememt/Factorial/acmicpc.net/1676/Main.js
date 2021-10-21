"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);

let ans = 0;
for (let i = 5; i <= N; i *= 5) {
  ans += Math.floor(N / i);
}
console.log(ans);
