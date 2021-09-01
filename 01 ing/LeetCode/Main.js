"use strict";
const inputFilePath = "/sample.txt";
// const input = require("fs")
//   .readFileSync(__dirname + inputFilePath)
//   .toString()
//   .trim()
//   .split("\n");
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const stack = [];
const ans = [];

for (let i = 1; i < input.length; i++) {
  const element = input[i].split(" ");
  if (element[0] === "push") {
    stack.push(element[1]);
  } else if (element[0] === "pop") {
    if (stack.length === 0) {
      ans.push(-1);
    } else {
      ans.push(stack.pop());
    }
  } else if (element[0] === "size") {
    ans.push(stack.length);
  } else if (element[0] === "empty") {
    if (stack.length === 0) {
      ans.push(1);
    } else {
      ans.push(0);
    }
  } else if (element[0] === "top") {
    if (stack.length === 0) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }
  }
}
console.log(ans.join("\n"));
