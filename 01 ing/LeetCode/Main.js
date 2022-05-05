const board = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Set());
  const cols = new Array(9).fill(0).map(() => new Set());
  const subBoxes = new Array(9).fill(0).map(() => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      const num = Number(board[i][j]);
      const IdxSubBox = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      if (rows[i].has(num) || cols[j].has(num) || subBoxes[IdxSubBox].has(num)) return false;
      else {
        rows[i].add(num);
        cols[j].add(num);
        subBoxes[IdxSubBox].add(num);
      }
    }
  }
  return true;
};
console.log(isValidSudoku(board));
