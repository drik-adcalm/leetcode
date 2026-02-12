var buildTree = function (preorder, inorder) {
  const len = preorder.length;
  const obj = {};
  inorder.forEach((n, i) => (obj[n] = i));
  const dfs = (preL, preR, inL, inR) => {
    if (preL > preR || inL > inR) return null;
    const root = new TreeNode(preorder[preL]);
    if (preL === preR) return root;
    const index = obj[root.val];
    const leftSize = index - inL;
    root.left = dfs(preL + 1, preL + leftSize, inL, index - 1);
    root.right = dfs(preL + leftSize + 1, preR, index + 1, inR);
    return root;
  };
  return dfs(0, len - 1, 0, len - 1);
};
