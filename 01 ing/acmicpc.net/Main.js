const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let deque = [];

const n = Number(input[0]);
let ans = [];
for (let i = 1; i <= n; i++) {
  const command = input[i].split(" ");
  if (command[0] === "push_front") deque.unshift(command[1]);
  else if (command[0] === "push_back") deque.push(command[1]);
  else if (command[0] === "pop_front") deque.length !== 0 ? ans.push(deque.shift()) : ans.push(-1);
  else if (command[0] === "pop_back") deque.length !== 0 ? ans.push(deque.pop()) : ans.push(-1);
  else if (command[0] === "size") ans.push(deque.length);
  else if (command[0] === "empty") deque.length !== 0 ? ans.push(0) : ans.push(1);
  else if (command[0] === "front") deque.length !== 0 ? ans.push(deque[0]) : ans.push(-1);
  else if (command[0] === "back") deque.length !== 0 ? ans.push(deque[deque.length - 1]) : ans.push(-1);
}
console.log(ans.join("\n"));
