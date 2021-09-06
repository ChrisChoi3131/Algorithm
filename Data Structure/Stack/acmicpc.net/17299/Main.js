"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map((x) => Number(x));
const s = [0];
const f = new Array(1000001).fill(0);
const ans = [];
for (let i = 0; i < n; i++) {
  f[arr[i]]++;
}

for (let i = 1; i < n; i++) {
  while (s.length && f[arr[s[s.length - 1]]] < f[arr[i]]) {
    ans[s.pop()] = arr[i];
  }
  s.push(i);
}
while (s.length) {
  ans[s.pop()] = -1;
}
console.log(ans.join(" "));
