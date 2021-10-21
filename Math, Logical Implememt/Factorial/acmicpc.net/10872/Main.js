"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let ans = 1;
for (let i = 1; i <= N; i++) {
  ans *= i;
}
console.log(ans);
