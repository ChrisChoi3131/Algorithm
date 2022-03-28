const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let maps = [];
let groups = new Array(n).fill(0).map(() => new Array(n).fill(0));
for (let i = 1; i <= n; i++) {
  maps.push(input[i].split("").map(Number));
}
let groupIdx = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (maps[i][j] === 1 && groups[i][j] === 0) {
      let q = [];
      groupIdx++;
      q.unshift({ x: i, y: j });
      groups[i][j] = groupIdx;
      while (q.length) {
        let { x, y } = q.pop();
        for (let k = 0; k < 4; k++) {
          let nextX = x + dx[k];
          let nextY = y + dy[k];
          if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= n) continue;
          if (maps[nextX][nextY] === 1 && groups[nextX][nextY] === 0) {
            q.unshift({ x: nextX, y: nextY });
            groups[nextX][nextY] = groupIdx;
          }
        }
      }
    }
  }
}
let ans = new Array(groupIdx).fill(0);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (groups[i][j] !== 0) ans[groups[i][j] - 1]++;
  }
}
console.log(groupIdx);
console.log(ans.sort((a, b) => a - b).join("\n"));
