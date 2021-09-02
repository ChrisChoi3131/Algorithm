"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const queue = [];
const ans = [];
for (let i = 1; i <= N; i++) {
  const cmd = input[i].split(" ");
  if (cmd[0] === "push") {
    queue.unshift(cmd[1]);
  } else if (cmd[0] === "pop") {
    if (queue.length !== 0) {
      ans.push(queue.pop());
    } else {
      ans.push(-1);
    }
  } else if (cmd[0] === "size") {
    ans.push(queue.length);
  } else if (cmd[0] === "empty") {
    if (queue.length !== 0) {
      ans.push(0);
    } else {
      ans.push(1);
    }
  } else if (cmd[0] === "front") {
    if (queue.length !== 0) {
      ans.push(queue[queue.length - 1]);
    } else {
      ans.push(-1);
    }
  } else if (cmd[0] === "back") {
    if (queue.length !== 0) {
      ans.push(queue[0]);
    } else {
      ans.push(-1);
    }
  }
}
console.log(ans.join("\n"));
