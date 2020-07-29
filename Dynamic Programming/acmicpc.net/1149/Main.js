var fs = require("fs");
const inputFilePath = "/sample.txt";
var input = require('fs')
    .readFileSync(__dirname + inputFilePath)
    // .readFileSync('/dev/stdin')
    .toString().trim().split("\n");

let N = input.shift();
let a = [], d = [];

for (let i = 0; i < input.length; i++) {
    a.push(input[i].split(" "));
}
d.push(a[0]);
for (let i = 1; i < input.length; i++) {
    let tmpArr = [];
    tmpArr.push(Math.min(d[i - 1][1], d[i - 1][2]) + parseInt(a[i][0]));
    tmpArr.push(Math.min(d[i - 1][0], d[i - 1][2]) + parseInt(a[i][1]));
    tmpArr.push(Math.min(d[i - 1][0], d[i - 1][1]) + parseInt(a[i][2]));
    d.push(tmpArr)
}
console.log(Math.min(Math.min(d[N - 1][0], d[N - 1][1]), d[N - 1][2]));