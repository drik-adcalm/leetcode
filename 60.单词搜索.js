var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const dfs = (i, j, k) => {
    if (board[i][j] !== word[k]) {
      return false;
    }
    if (k + 1 === word.length) {
      return true;
    }
    const temp = board[i][j];
    board[i][j] = 0;
    for (const [x, y] of [
      [i, j - 1],
      [i, j + 1],
      [i - 1, j],
      [i + 1, j],
    ]) {
      if (0 <= x && x < rows && 0 <= y && y <= cols) {
        if (dfs(x, y, k + 1)) {
          return true;
        }
      }
    }
    board[i][j] = temp;
    return false;
  };
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};