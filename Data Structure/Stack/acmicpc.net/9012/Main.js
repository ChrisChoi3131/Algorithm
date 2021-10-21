"use strict";
const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

class Stack {
  constructor() {
    this._arr = [];
  }
  ["push"](value) {
    return this._arr.push(value);
  }
  ["pop"]() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this._arr.pop();
    }
  }
  ["size"]() {
    return this._arr.length;
  }
  ["isEmpty"]() {
    if (this._arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  ["top"]() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this._arr[this._arr.length - 1];
    }
  }
}
let ans = [];
for (let i = 1; i <= input[0]; i++) {
  let parenthesisArr = input[i].split("");
  let stack = new Stack();
  let result = "";
  for (const aParenthesis of parenthesisArr) {
    if (aParenthesis === "(") {
      stack.push("(");
    } else {
      if (!stack.isEmpty()) {
        stack.pop();
      } else {
        result = "NO";
        break;
      }
    }
  }
  if (result === "") {
    if (!stack.isEmpty()) {
      ans.push("NO");
    } else {
      ans.push("YES");
    }
  } else {
    ans.push(result);
  }
}

console.log(ans.join("\n"));
