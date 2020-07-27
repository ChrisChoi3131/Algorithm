var fs = require("fs");
const inputFilePath = "/sample.txt";
var input = require('fs')
    .readFileSync(__dirname + inputFilePath)
    // .readFileSync('/dev/stdin')
    .toString().trim();


console.log(inputArray);