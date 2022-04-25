/**
 * @param {number[][]} moves
 * @return {string}
 */
const moves = [
  [
    [0, 0],
    [1, 1],
  ],
];
const tictactoe = function (moves) {
  const row = new Array(3).fill(0);
  const col = new Array(3).fill(0);
  let diag = 0;
  let antiDiag = 0;
  let player = 1;
  for (let i = 0; i < moves.length; i++) {
    const [x, y] = moves[i];
    row[x] += player;
    col[y] += player;
    if (x === y) diag += player;
    if (x + y === 2) antiDiag += player;
    const winningConditions = [
      Math.abs(row[x]) === 3,
      Math.abs(col[y]) === 3,
      Math.abs(diag) === 3,
      Math.abs(antiDiag) === 3,
    ];
    if (winningConditions.includes(true)) {
      if (i % 2 === 0) return 'A';
      else return 'B';
    }
    player *= -1;
  }
  if (moves.length === 9) return 'Draw';
  else return 'Pending';
};
console.log(tictactoe(moves));
