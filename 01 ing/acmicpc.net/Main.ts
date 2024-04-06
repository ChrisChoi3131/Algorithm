const inputFilePath = '/sample.txt';
const input: string[] = require('fs')
  .readFileSync(process.platform == 'linux' ? '/dev/stdin' : __dirname + inputFilePath, 'utf8')
  .toString()
  .trim()
  .split('\n');

const [, m]: number[] = input[0].split(' ').map(Number);
const temps: number[] = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const count = temps.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
const nums: number[] = Object.keys(count).map(Number);
const n: number = nums.length;
const bufferForNum: number[] = [];
const output: string[] = [];
getSequence(0, 0);
console.log(output.join('\n'));

function getSequence(idxSeq: number, start: number) {
  if (idxSeq === m) {
    output.push(bufferForNum.join(' '));
    return;
  }
  for (let idxNum = start; idxNum < n; idxNum++) {
    if (count[nums[idxNum]] === 0) continue;
    count[nums[idxNum]]--;
    bufferForNum[idxSeq] = nums[idxNum];
    getSequence(idxSeq + 1, idxNum);
    count[nums[idxNum]]++;
  }
}
