"use strict";
const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
let ans = [];
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}
let cursor = 0;
while (arr.length) {
  cursor += K - 1;
  if (cursor >= arr.length) cursor %= arr.length;
  ans.push(arr.splice(cursor, 1));
}

console.log("<" + ans.join(", ") + ">");
