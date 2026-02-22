var generate = function (numRows) {
  const c = Array(numRows);
  for (let i = 0; i < numRows; i++) {
    c[i] = Array(i + 1);
    c[i][0] = c[i][i] = 1;
    for (let j = 1; j < i; j++) {
      c[i][j] = c[i - 1][j - 1] + c[i - 1][j];
    }
  }
  return c;
};
