const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const setForFirst = ["0","1","10","11","100","101","110","111"];
const set = ["000","001","010","011","100","101","110","111"];

const nums = input[0].split("");

let isFirst = true;
let ans = "";
nums.forEach(num => {
  if(isFirst){
    ans+=setForFirst[num];
    isFirst = !isFirst;
  }else{
    ans+=set[num];
  }
});
console.log(ans)