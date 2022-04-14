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
for (let i = 1; i <= n - 1; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  edges[x - 1].push(y - 1);
  edges[y - 1].push(x - 1);
}
const q = [];
let head = 0,
  tail = 0;
const q_push = (vertex) => (q[tail++] = vertex);
const q_pop = () => q[head++];
const q_size = () => tail - head;

if (route[0] !== 0) {
  console.log(0);
  process.exit();
}

q_push(route[0]);
check[route[0]] = true;
let from = 1,
  to = 1;
while (q_size()) {
  const cv = q_pop();
  to = from;
  edges[cv].forEach((vertex) => (!check[vertex] ? to++ : null));
  let pushCnt = 0;
  for (let i = from; i < to; i++) {
    const nv = route[i];
    if (!check[nv]) {
      if (edges[cv].indexOf(nv) !== -1) {
        q_push(nv);
        check[nv] = true;
        pushCnt++;
      } else {
        console.log(0);
        process.exit();
      }
    } else {
      console.log(0);
      process.exit();
    }
  }
  from += pushCnt;
}
console.log(1);
