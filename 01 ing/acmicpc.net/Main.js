"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input[0];
const stack = [];
let ans = [];
let m = 1;
for (let i = 1; i <= n; i++) {
  const curr = Number(input[i]);
  while (stack.length === 0 || curr > stack[stack.length - 1]) {
    stack.push(m);
    ans.push("+");
    m++;
  }
  if (curr === stack[stack.length - 1]) {
    stack.pop();
    ans.push("-");
  }
}
if (stack.length === 0) {
  console.log(ans.join("\n"));
} else {
  console.log("NO");
}
