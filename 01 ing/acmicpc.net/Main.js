const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [A, B] = input[0].split(" ").map(Number);
let m = Number(input[1]);
const numbers = input[2].split(" ").map(Number);

function convertBase(num, base) {
  let converted = "";
  let remainder = 0;
  let quotient = 0;

  while (num > 0) {
    quotient = Math.floor(num / base);
    remainder = num % base;
    converted = remainder + " " + converted;
    num = quotient;
  }
  return converted;
}
let demicalNum = 0;
numbers.forEach((number) => {
  demicalNum += number * Math.pow(A, --m);
});

const result = convertBase(demicalNum, B);
console.log(result);
