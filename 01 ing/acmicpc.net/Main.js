const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const JunesYEAR = input[0].split(" ").map(Number);
const E = 16,
  S = 29,
  M = 20;

let realYear = 1;
let e = 1,
  s = 1,
  m = 1;
while (true) {
  if (e === JunesYEAR[0] && s === JunesYEAR[1] && m === JunesYEAR[2]) {
    console.log(realYear);
    process.exit();
  }
  e++;
  if (e === E) e = 1;
  s++;
  if (s === S) s = 1;
  m++;
  if (m === M) m = 1;
  realYear++;
}
