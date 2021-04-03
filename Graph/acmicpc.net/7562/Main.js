const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const T = Number(input[0]);
let lineIdx = 0;
let ans = [];
const [DX, DY] = [[-2, -2, -1, -1, 1, 1, 2, 2], [-1, 1, -2, 2, -2, 2, -1, 1]];
for (let test_case = 1; test_case <= T; test_case++) {
  const I = Number(input[++lineIdx]);
  const [startX, startY] = input[++lineIdx].split(" ").map(Number);
  const [destX, destY] = input[++lineIdx].split(" ").map(Number);
  let queue = [];
  let c = Array.from(Array(I), () => (new Array(I)).fill(0));

  queue.unshift({ x: startX, y: startY });
  while (queue[0]) {
    let curr = queue.pop();
    for (let i = 0; i < 8; i++) {
      let nX = curr.x + DX[i];
      let nY = curr.y + DY[i];
      if (nX >= 0 && nY >= 0 && nX < I && nY < I && c[nX][nY] === 0) {
        if ((nX === startX && nY === startY)) continue;
        c[nX][nY] = c[curr.x][curr.y] + 1;
        queue.unshift({ x: nX, y: nY });
      }
    }
  }
  ans.push(c[destX][destY])
}
console.log(ans.join("\n"));