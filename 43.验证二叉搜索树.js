var isValidBST = function (root) {
  const helpBinarySearchTreeandFind = (node, lower, upper) => {
    if (node == null) return true;
    const val = node.val;
    if (val <= lower || val >= upper) return false;
    if (!helpBinarySearchTreeandFind(node.left, lower, val)) return false;
    if (!helpBinarySearchTreeandFind(node.right, val, upper)) return false;
    return true;
  };

  return helpBinarySearchTreeandFind(root, -Infinity, Infinity);
};
