const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input[0]);
const CANDIES = ["P", "Z", "Y", "C"];
let a = [];

const points = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];
for (let i = 1; i <= N; i++) {
  a.push(input[i].split(""));
}
function findMaxNumber(array) {
  let max = 0;
  for (let i = 0; i < N; i++) {
    let rowCount = 1;
    let colCount = 1;
    for (let j = 1; j < N; j++) {
      if (array[i][j] === array[i][j - 1]) {
        rowCount++;
      } else {
        rowCount = 1;
      }
      if (max < rowCount) max = rowCount;

      if (array[j][i] === array[j - 1][i]) {
        colCount++;
      } else {
        colCount = 1;
      }
      if (max < colCount) max = colCount;
    }
  }
  return max;
}
let maxNumber = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < 4; k++) {
      let x = i + points[k][0];
      let y = j + points[k][1];
      if (x < 0 || x >= N || y < 0 || y >= N) continue;
      let copyA = JSON.parse(JSON.stringify(a));
      let tmp = copyA[x][y];
      copyA[x][y] = copyA[i][j];
      copyA[i][j] = tmp;
      let returnMaxNumber = findMaxNumber(copyA);
      maxNumber < returnMaxNumber ? (maxNumber = returnMaxNumber) : "";
    }
  }
}

console.log(maxNumber);
