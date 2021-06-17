"use strict";
const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

class Stack {
  constructor() {
    this._arr = [];
    this.ans = [];
  }
  ["push"](value) {
    this.ans.push("+");
    return this._arr.push(value);
  }
  ["pop"]() {
    this.ans.push("-");
    return this._arr.pop();
  }
  ["top"]() {
    if (this._arr.length === 0) {
      return undefined;
    } else {
      return this._arr[this._arr.length - 1];
    }
  }
}
let stack = new Stack();
let cursor = 0;
for (let i = 1; i <= N; i++) {
  const ele = Number(input[i]);
  if (ele > cursor) {
    while (ele !== cursor) {
      stack.push(++cursor);
    }
    stack.pop();
  } else if (ele <= cursor) {
    if (stack.top() === ele) {
      stack.pop();
    } else {
      console.log("NO");
      return;
    }
  }
}
console.log(stack.ans.join("\n"));
