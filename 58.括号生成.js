var generateParenthesis = function (n) {
  const result = [];
  const path = new Array(2 * n);
  const backtrack = (left, right) => {
    if (right === n) {
      result.push(path.join(""));
      return;
    }
    if (left < n) {
      path[left + right] = "(";
      backtrack(left + 1, right);
    }
    if (right < left) {
      path[left + right] = ")";
      backtrack(left, right + 1);
    }
  };
  backtrack(0, 0);
  return result;
};
