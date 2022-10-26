const inputFilePath = '/sample.txt';
import fs from 'fs';
fs.readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
