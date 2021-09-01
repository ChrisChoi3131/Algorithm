"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const left = input[0].split("");
const right = [];
const n = input[1];
for (let i = 0; i < n; i++) {
  const cmd = input[i + 2].split(" ");
  if (cmd[0] === "P") {
    left.push(cmd[1]);
  } else if (cmd[0] === "L" && left.length !== 0) {
    right.push(left.pop());
  } else if (cmd[0] === "D" && right.length !== 0) {
    left.push(right.pop());
  } else if (cmd[0] === "B" && left.length !== 0) {
    left.pop();
  }
}
const ans = left.concat(right.reverse());

console.log(ans.join(""));
