/**
 * @param {number} n
 */
class TicTacToe {
  constructor(n) {
    this.n = n;
    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.diags = 0;
    this.antiDiags = 0;
  }
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
  let dir = 1;
  player === 2 ? (dir = -1) : null;
  this.rows[row] += dir;
  this.cols[col] += dir;
  if (row === col) this.diags += dir;
  if (row + col === this.n - 1) this.antiDiags += dir;
  const conditionsWin = [
    Math.abs(this.rows[row]) === this.n,
    Math.abs(this.cols[col]) === this.n,
    Math.abs(this.diags) === this.n,
    Math.abs(this.antiDiags) === this.n,
  ];
  if (conditionsWin.includes(true)) return player;
  else return 0;
};

const n = 3;

const input = [
  [0, 0, 1],
  [0, 2, 2],
  [2, 2, 1],
  [1, 1, 2],
  [2, 0, 1],
  [1, 0, 2],
  [2, 1, 1],
];
const obj = new TicTacToe(n);
for (let i = 0; i < input.length; i++) {
  console.log(obj.move(...input[i]));
}
console.log();
/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
