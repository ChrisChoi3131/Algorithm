"use strict";
const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
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
      return this._arr.shift();
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
  ["front"]() {
    if (this.empty()) {
      return -1;
    } else {
      return this._arr[0];
    }
  }
  ["back"]() {
    if (this.empty()) {
      return -1;
    } else {
      return this._arr[this._arr.length - 1];
    }
  }
}
let ans = [];
let queue = new Queue();
for (let i = 1; i <= input[0]; i++) {
  const query = input[i].split(" ");
  if (query[0] === "push") {
    queue.push(query[1]);
  } else {
    ans.push(queue[query[0]]());
  }
}
console.log(ans.join("\n"));
