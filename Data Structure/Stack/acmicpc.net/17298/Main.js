"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const sequence = input[1].split(" ").map((x) => Number(x));
const stack = [];
const ans = new Array(sequence.length);

for (let i = 0; i < N; i++) {
  if (stack.length !== 0) {
    while (stack.length !== 0) {
      const top = stack[stack.length - 1];
      if (sequence[i] > top.value) {
        stack.pop();
        ans[top.idx] = sequence[i];
      } else {
        break;
      }
    }
  }
  stack.push({ idx: i, value: sequence[i] });
}
while (stack.length !== 0) {
  const top = stack.pop();
  ans[top.idx] = -1;
}
console.log(ans.join(" "));
