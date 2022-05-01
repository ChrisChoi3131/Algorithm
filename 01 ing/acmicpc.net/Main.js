const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
//const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);

const heap = new Array(n + 1).fill(Infinity);
let idxHeap = 0;

const h_push = num => {
  heap[++idxHeap] = num;
  for (let i = idxHeap; i > 1; i = Math.floor(i / 2)) {
    if (Math.abs(heap[i]) < Math.abs(heap[Math.floor(i / 2)])) {
      const tmp = heap[Math.floor(i / 2)];
      heap[Math.floor(i / 2)] = heap[i];
      heap[i] = tmp;
    } else if (Math.abs(heap[i]) === Math.abs(heap[Math.floor(i / 2)])) {
      if (heap[i] < heap[Math.floor(i / 2)]) {
        const tmp = heap[Math.floor(i / 2)];
        heap[Math.floor(i / 2)] = heap[i];
        heap[i] = tmp;
      } else break;
    } else break;
  }
};

const h_pop = () => {
  if (idxHeap === 0) return 0;
  const num = heap[1];
  heap[1] = heap[idxHeap];
  heap[idxHeap--] = Infinity;
  for (let i = 1; i * 2 <= idxHeap; ) {
    if (Math.abs(heap[i]) < Math.abs(heap[i * 2]) && Math.abs(heap[i]) < Math.abs(heap[i * 2 + 1])) break;
    else if (Math.abs(heap[i * 2]) < Math.abs(heap[i * 2 + 1])) {
      const tmp = heap[i];
      heap[i] = heap[i * 2];
      heap[i * 2] = tmp;
      i = i * 2;
    } else if (Math.abs(heap[i * 2]) > Math.abs(heap[i * 2 + 1])) {
      const tmp = heap[i];
      heap[i] = heap[i * 2 + 1];
      heap[i * 2 + 1] = tmp;
      i = i * 2 + 1;
    } else {
      if (heap[i * 2] < heap[i * 2 + 1]) {
        const tmp = heap[i];
        heap[i] = heap[i * 2];
        heap[i * 2] = tmp;
        i = i * 2;
      } else {
        const tmp = heap[i];
        heap[i] = heap[i * 2 + 1];
        heap[i * 2 + 1] = tmp;
        i = i * 2 + 1;
      }
    }
  }
  return num;
};

let ans = '';
for (let i = 1; i <= n; i++) {
  const x = Number(input[i]);
  if (x === 0) ans += h_pop() + '\n';
  else h_push(x);
}
console.log(ans);
