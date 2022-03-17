const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const startChannel = 100;
const wantedChannel = Number(input[0]);
const M = Number(input[1]);
const brokenChannels = M !== 0 ? input[2].split(" ").map(Number) : [];
let ans = Math.abs(wantedChannel - startChannel);
outer: for (let i = 0; i <= 1000000; i++) {
  const selectedChannels = i.toString().split("").map(Number);
  let numOfClicks = Math.abs(i - wantedChannel) + selectedChannels.length;
  for (let i = 0; i < selectedChannels.length; i++) {
    if (brokenChannels.indexOf(selectedChannels[i]) !== -1) continue outer;
  }
  ans > numOfClicks ? (ans = numOfClicks) : "";
}
console.log(ans);
