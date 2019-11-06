var fs = require("fs");
const inputFilePath = "./Data Structure/Stack/acmicpc.net/9093/sample.txt";
var inputArray;

if (process.platform == "win32") {
    inputArray = fs
        .readFileSync("input.txt", "utf8")
        .toString()
        .trim()
        .split("\n");
} else {
    inputArray = fs
        .readFileSync(inputFilePath)
        // .readFileSync("/dev/stdin")
        .toString()
        .trim()
        .split("\n");
}

class Stack {
    constructor() {
        this._array = [];
    }
    push(item) {
        this._array.push(item);
    }
    pop() {
        return this._array.pop();
    }
}
const T = inputArray[0];
const stack = new Stack();

for (let test_case = 1; test_case <= T; test_case++) {
    const element = inputArray[test_case].split(" ");
    var tmp = "";
    for (let i = 0; i < element.length; i++) {
        for (let j = 0; j < element[i].length; j++) {
            stack.push(element[i].charAt(j));
        }
        for (let j = 0; j < element[i].length; j++) {
            tmp = tmp + stack.pop();
        }
        if (i != element.length - 1) {
            tmp = tmp + " ";
        }
    }
    console.log(tmp);
}
