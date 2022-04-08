const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const n = Number(input[0]);
const abilities = [];
const aTeam = new Array(n / 2);
let minimumDiff = Number.MAX_SAFE_INTEGER;
const check = new Array(n).fill(false);
for (let i = 1; i <= n; i++) {
  abilities.push(input[i].split(" ").map(Number));
}
go(0, 0);
function go(node, idx) {
  if (check[node]) return;
  if (idx === n / 2) {
    let aTeamAbility = 0;
    let bTeamAbility = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (aTeam.indexOf(i) !== -1 && aTeam.indexOf(j) !== -1) aTeamAbility = aTeamAbility + abilities[i][j];
        else if (aTeam.indexOf(i) === -1 && aTeam.indexOf(j) === -1) bTeamAbility = bTeamAbility + abilities[i][j];
      }
    }
    const differential = Math.abs(aTeamAbility - bTeamAbility);
    minimumDiff = Math.min(minimumDiff, differential);
    return;
  }
  for (let i = node; i < n; i++) {
    check[i] = true;
    aTeam[idx] = i;
    go(i + 1, idx + 1);
    check[i] = false;
  }
}
console.log(minimumDiff);
