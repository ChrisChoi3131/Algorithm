"use strict";
// const inputFilePath = "/sample.txt";
// const input = require("fs")
//   .readFileSync(__dirname + inputFilePath)
//   .toString()
//   .trim()
//   .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

/**
 * @param {string} s
 * @return {number}
 */
const s = "tmmzuxt";
const lengthOfLongestSubstring = function (s) {
  const chars = s.split("");
  chars.unshift("");
  let length = 0;
  let maxLength = 0;
  let hashmap = {};
  for (let i = 1; i < chars.length; i++) {
    if (hashmap[chars[i]]) {
      length = i - hashmap[chars[i]];
      hashmap[chars[i]] = i;
    } else {
      length++;
      hashmap[chars[i]] = i;
      maxLength < length ? (maxLength = length) : "";
    }
  }
  return maxLength;
};
console.log(lengthOfLongestSubstring(s));
