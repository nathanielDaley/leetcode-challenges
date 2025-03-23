// ------------------------------
// Solutions
// ------------------------------
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rowMap = new Map();
  let columnMap = new Map();
  let squareMap = new Map();

  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      if (board[row][column] === ".") continue;

      const value = board[row][column];
      const squareKey = `${[Math.floor(row / 3), Math.floor(column / 3)]}`;

      if (
        (rowMap.get(row) && rowMap.get(row).has(value)) ||
        (columnMap.get(column) && columnMap.get(column).has(value)) ||
        (squareMap.get(squareKey) && squareMap.get(squareKey).has(value))
      ) {
        return false;
      }

      if (!rowMap.has(row)) rowMap.set(row, new Set());
      if (!columnMap.has(column)) columnMap.set(column, new Set());
      if (!squareMap.has(squareKey)) squareMap.set(squareKey, new Set());

      rowMap.get(row).add(value);
      columnMap.get(column).add(value);
      squareMap.get(squareKey).add(value);
    }
  }

  return true;
};

// ------------------------------------------
// Tests
// ------------------------------------------
let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board)); // true

board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board)); // false

board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];
console.log(isValidSudoku(board)); // false
