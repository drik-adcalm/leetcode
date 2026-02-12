var maxPathSum = function (root) {
  let ans = -Infinity;
  const dfs = (node) => {
    if (!node) return 0;
    const LVal = Math.max(dfs(node.left), 0);
    const RVal = Math.max(dfs(node.right), 0);
    ans = Math.max(node.val + LVal + RVal, ans);
    return Math.max(LVal, RVal) + node.val;
  };
  dfs(root);
  return ans;
};
