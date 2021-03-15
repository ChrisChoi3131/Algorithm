const inputFilePath = "/sample.txt";
console.log(__dirname);
let input = require("fs").readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");


