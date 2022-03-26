const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let adM = new Array(n).fill(0).map(() => new Array(n).fill(false));
let adL = new Array(n).fill(0).map(() => new Array());
let edgeL = [];
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  adM[a][b] = adM[b][a] = true;
  adL[a].push(b);
  adL[b].push(a);
  edgeL.push([a, b]);
  edgeL.push([b, a]);
}
for (let i = 0; i < edgeL.length; i++) {
  const [a, b] = edgeL[i];
  for (let j = 0; j < edgeL.length; j++) {
    const [c, d] = edgeL[j];
    if (a === b || a === c || a === d || b === c || b === d || c === d) continue;
    if (!adM[b][c]) continue;
    for (const e of adL[d]) {
      if (e === a || e === b || e === c || e === d) continue;
      console.log(1);
      process.exit();
    }
  }
}
console.log(0);
