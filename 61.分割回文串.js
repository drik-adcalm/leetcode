/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const path = [];
  const dfs = (i, start) => {
    if (i === s.length) {
      result.push(path.slice());
      return;
    }
    if (i < s.length - 1) {
      dfs(i + 1, start);
    }
    if (isVaildPartition(s, start, i)) {
      path.push(s.substring(start, i + 1));
      dfs(i + 1, i + 1);
      path.pop();
    }
  };
  dfs(0, 0);
  return result;
};
const isVaildPartition = (s, left, right) => {
  while (left < right) {
    if (s.charAt(left++) !== s.charAt(right--)) {
      return false;
    }
  }
  return true;
};
