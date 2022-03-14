"use strict";
// const inputFilePath = "/sample.txt";
// const input = require("fs")
//   .readFileSync(__dirname + inputFilePath)
//   .toString()
//   .trim()
//   .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = function (nums, target) {
  const ans = [];
  outer: for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        ans.push(i);
        ans.push(j);
        break outer;
      }
    }
  }
  return ans;
};

twoSum(nums, target);
