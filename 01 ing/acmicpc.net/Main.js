const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let lineIdx = 0;
const T = Number(input[lineIdx++]);
for (let test_case = 0; test_case < T; test_case++) {
  const [V, E] = input[lineIdx++].split(" ").map(Number);
  let list = Array.from(Array(V + 1), () => []);
  let check = Array.from(Array(V + 1)).fill(0);
  for (let i = 0; i < E; i++) {
    const [X, Y] = input[lineIdx++].split(" ").map(Number);
    list[X].push(Y);
    list[Y].push(X);
  }
  let ans = "YES";
  dfs(1, 1);
  console.log(ans);
  function dfs(curr, color) {
    if (check[curr] !== 0) return;
    check[curr] = color;
    for (let i = 0; i < list[curr].length; i++) {
      const next = list[curr][i];
      if (check[next] === 0) {
        if (color === 1) {
          dfs(next, 2);
        } else {
          dfs(next, 1);
        }
      } else if (check[next] === color) {
        ans = "NO"
        return;
      }
    }
  }
}


