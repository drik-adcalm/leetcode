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


var generate = function (numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = res[i - 1][j] + res[i - 1][j - 1];
    }
    res.push(row);
  }
  return res;
};