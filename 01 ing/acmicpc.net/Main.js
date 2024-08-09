const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(process.platform == 'linux' ? '/dev/stdin' : __dirname + inputFilePath, 'utf8')
  .toString()
  .trim()
  .split('\n');

solution();
function solution() {
  const mod = 1_000_000_000;
  const [n, k] = input[0].split(' ').map(Number);
  const d = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let j = 0; j <= n; j++) d[1][j] = 1;
  for (let i = 2; i <= k; i++) {
    for (let j = 0; j <= n; j++) {
      for (let l = 0; l <= j; l++) {
        d[i][j] += d[i - 1][l];
        d[i][j] %= mod;
      }
    }
  }
  console.log(d[k][n] % mod);
}
