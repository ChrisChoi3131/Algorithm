const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const n = Number(input[0]);
const route = input[n].split(" ").map((num) => Number(num) - 1);
const edges = new Array(n).fill(0).map(() => new Array());
const check = new Array(n).fill(false);
const parent = new Array(n).fill(-1);
for (let i = 1; i <= n - 1; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  edges[x - 1].push(y - 1);
  edges[y - 1].push(x - 1);
}
if (route[0] !== 0) {
  console.log(0);
  process.exit();
}
check[0] = true;
edges[0].forEach((child) => {
  parent[child] = 0;
});
for (let i = 1; i < n; i++) {
  if (route[i - 1] === parent[route[i]]) {
    edges[route[i]].forEach((child) => {
      parent[child] = route[i];
    });
    check[route[i]] = true;
    continue;
  }
  let cnt = 0;
  edges[route[i - 1]].forEach((child) => {
    if (!check[child]) cnt++;
  });
  if (cnt) {
    console.log(0);
    process.exit();
  } else {
    if (!check[parent[route[i]]]) {
      console.log(0);
      process.exit();
    } else {
      edges[route[i]].forEach((child) => {
        parent[child] = route[i];
      });
      check[route[i]] = true;
    }
  }
}
console.log(1);
