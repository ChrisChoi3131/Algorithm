var fs = require("fs");
const inputFilePath = "./Data Structure/Stack/acmicpc.net/9012/sample.txt";
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
    const array = inputArray[test_case].split("");
    let count = 0;
    var isInvalid = false;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element === "("){
            count++;
        }else{
            count--;
        }

        if(count<0){
            isInvalid = true;
            break;
        }
    }
    if(count!==0 || isInvalid){
        console.log("NO");
    }else{
        console.log("YES");
    }
}
