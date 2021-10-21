"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const parenthesis = input[0].split("");
const stack = [];
let ans = 0;
for (let i = 0; i < parenthesis.length; i++) {
  if (parenthesis[i] === "(") {
    stack.push(i);
  } else {
    if (stack[stack.length - 1] + 1 === i) {
      ans += stack.length - 1;
    } else {
      ans++;
    }
    stack.pop();
  }
}
console.log(ans);
