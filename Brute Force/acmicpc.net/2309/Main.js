const inputFilePath = "/sample.txt";
let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");
let a = input.map(item => {
  return parseInt(item);
})
let sum = 0;
a.forEach(element => sum += element);
let checkArr = [];
outer:
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    if (i !== j && sum - a[i] - a[j] === 100) {
      checkArr.push(i);
      checkArr.push(j);
      break outer;
    }
  }
}
let answer = [];
for (let i = 0; i < a.length; i++) {
  if (!checkArr.includes(i)) {
    answer.push(a[i]);
  }
}
answer.sort((a, b) => a - b);
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}
