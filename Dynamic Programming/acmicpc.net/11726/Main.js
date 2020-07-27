const fs = require("fs");
const inputFilePath = "/sample.txt";
let inputArray;

if (process.platform == "win32") {
    inputArray = fs
        .readFileSync("input.txt", "utf8")
        .toString()
        .trim()
        .split("\n");
} else {
    inputArray = fs
        .readFileSync(__dirname + inputFilePath)
        // .readFileSync("/dev/stdin")
        .toString()
        .trim()
        .split("\n");
}

const N = inputArray[0];
const NUMBER = 10007;
const d = [];
d.push(1); d.push(1);
for (let i = 2; i <= N; i++) {
    const calcValue = (d[i - 1] + d[i - 2]) % NUMBER;
    d.push(calcValue);
}
console.log(d[N]);