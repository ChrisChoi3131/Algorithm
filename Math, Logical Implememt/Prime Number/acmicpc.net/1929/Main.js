"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [M, N] = input[0].split(" ").map((x) => Number(x));
const check = Array(N + 1).fill(false, 0, N + 1);
check[1] = true;
for (let i = 2; i * i <= N; i++) {
  if (check[i] === false) {
    for (let j = i + i; j <= N; j += i) {
      check[j] = true;
    }
  }
}
const ans = [];
for (let i = M; i <= N; i++) {
  if (check[i] === false) {
    ans.push(i);
  }
}
console.log(ans.join("\n"));
