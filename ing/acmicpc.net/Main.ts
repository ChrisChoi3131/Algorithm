const inputFilePath = '/sample.txt';
const input: string[] = require('fs')
  .readFileSync(process.platform == 'linux' ? '/dev/stdin' : __dirname + inputFilePath, 'utf8')
  .toString()
  .trim()
  .split('\n');
solution();

function solution(): void {
  const [n, s]: number[] = input[0].split(' ').map(Number);
  const nums: number[] = input[1].split(' ').map(Number);
  let ans: number = 0;
  for (let i = 1; i < 1 << n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        sum += nums[j];
      }
    }
    if (sum === s) ans++;
  }
  console.log(ans);
}
