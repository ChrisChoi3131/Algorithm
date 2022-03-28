const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let inputIdx = 0;
const k = Number(input[inputIdx++]);
let adL, check, isBiGraph;
let ans = [];
for (let test_case = 0; test_case < k; test_case++) {
  const [v, e] = input[inputIdx++].split(" ").map(Number);
  adL = new Array(v).fill(0).map(() => new Array());
  check = new Array(v).fill(0);
  isBiGraph = true;
  for (let i = 0; i < e; i++) {
    const [u, v] = input[inputIdx++].split(" ").map((num) => num - 1);
    adL[u].push(v);
    adL[v].push(u);
  }
  for (let i = 0; i < v; i++) {
    if (check[i] === 0) dfs(i, 1);
  }

  if (!isBiGraph) ans.push("NO");
  else if (isBiGraph) ans.push("YES");
}
console.log(ans.join("\n"));

function dfs(v, groupIdx) {
  if (check[v]) return;
  check[v] = groupIdx;
  for (const nextV of adL[v]) {
    if (check[nextV] === 0) {
      dfs(nextV, 3 - groupIdx);
    } else {
      if (check[v] === check[nextV]) {
        isBiGraph = false;
      }
    }
  }
}
