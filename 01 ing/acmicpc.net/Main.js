const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);
const abilities = [];
for (let i = 1; i <= n; i++) {
  abilities.push(input[i].split(' ').map(Number));
}

let ans = Infinity;
for (let i = 1; i < 1 << n; i++) {
  const first = [];
  const second = [];

  for (let j = 0; j < n; j++) {
    if (i & (1 << j)) first.push(j);
    else second.push(j);
  }
  if (first.length !== n / 2) continue;

  let abilitiesFirst = 0;
  let abilitiesSecond = 0;
  for (let j = 0; j < n / 2; j++) {
    for (let k = 0; k < n / 2; k++) {
      abilitiesFirst += abilities[first[j]][first[k]];
      abilitiesSecond += abilities[second[j]][second[k]];
    }
  }
  const abilityDiff = Math.abs(abilitiesFirst - abilitiesSecond);
  if (ans > Math.abs(abilitiesFirst - abilitiesSecond)) ans = abilityDiff;
}
console.log(ans);
