/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill("."));
  const path = [];
  const result = [];
  const canAttack = (matrix, rows, cols) => {
    let i;
    let j;
    for (i = 0, j = cols; i < n; i++) {
      if (matrix[i][j] === "Q") {
        return true;
      }
    }
    for (j = 0, i = rows; j < n; j++) {
      if (matrix[i][j] === "Q") {
        return true;
      }
    }
    for (j = cols - 1, i = rows - 1; i >= 0 && j >= 0; i--, j--) {
      if (matrix[i][j] === "Q") {
        return true;
      }
    }
    for (j = cols + 1, i = rows - 1; i >= 0 && j < n; i--, j++) {
      if (matrix[i][j] === "Q") {
        return true;
      }
    }
    return false;
  };
  const backtrack = (matrix, row, col) => {
    if (path.length === matrix.length) {
      result.push(path.slice());
      return;
    }
    for (let i = row; i < n; i++) {
      for (let j = col; j < n; j++) {
        if (canAttack(matrix, i, j)) {
          continue;
        }
        matrix[i][j] = "Q";
        path.push(matrix[i].join(""));
        backtrack(matrix, i + 1, 0);
        matrix[i][j] = ".";
        path.pop();
      }
    }
  };
  backtrack(matrix, 0, 0);
  return result;
};
