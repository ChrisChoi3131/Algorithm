var fs = require("fs");
const inputFilePath = "./Data Structure/Stack/acmicpc.net/10828/sample.txt";
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
        this._arr = [];
    }
    push(item) {
        this._arr.push(item);
    }
    pop() {
        return this._arr.pop();
    }
    peek() {
        if(this._arr.length === 0){
            return -1;
        }
        return this._arr[this._arr.length - 1];
    }
    isEmpty() {
        if (this._arr.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}

const N = inputArray[0];
const stack = new Stack();
let Answer="";

for (let index = 1; index <= N; index++) {
    const element = inputArray[index].split(" ");
    const inputCmd = element[0];
    const inputValue = element.length == 0 ? "" : element[1];
    let answer;
    if (inputCmd === "push") {
        stack.push(inputValue);
        continue;
    } else if (inputCmd === "pop") {
        let popValue = stack.pop();
        if (popValue === undefined) {
            answer = "-1";
        } else {
            answer = popValue;
        }
    } else if (inputCmd === "size") {
        answer = stack._arr.length;
    } else if (inputCmd === "empty") {
        if (stack.isEmpty()) {
            answer = "1";
        } else {
            answer = "0";
        }
    } else if (inputCmd === "top") {
        answer = stack.peek();
    }
    Answer += answer + "\n" ;
}
console.log(Answer);
