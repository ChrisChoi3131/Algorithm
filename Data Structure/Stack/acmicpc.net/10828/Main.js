"use strict";
const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

class Stack {
  constructor() {
    this._arr = [];
  }
  ["push"](value) {
    return this._arr.push(value);
  }
  ["pop"]() {
    if (this.empty()) {
      return -1;
    } else {
      return this._arr.pop();
    }
  }
  ["size"]() {
    return this._arr.length;
  }
  ["empty"]() {
    if (this._arr.length === 0) {
      return 1;
    } else {
      return 0;
    }
  }
  ["top"]() {
    if (this.empty()) {
      return -1;
    } else {
      return this._arr[this._arr.length - 1];
    }
  }
}
const stack = new Stack();
let ans = [];
for (let i = 1; i <= input[0]; i++) {
  const orderType = input[i].split(" ")[0];

  if (orderType === "push") {
    const value = input[i].split(" ")[1];
    stack.push(value);
  } else {
    ans.push(stack[orderType]());
  }
}
console.log(ans.join("\n"));
