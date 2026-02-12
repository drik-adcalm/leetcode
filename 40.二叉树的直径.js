var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  const caculateDepth = (node) => {
    if (!node) return 0;
    const left = caculateDepth(node.left);
    const right = caculateDepth(node.right);
    maxDiameter = Math.max(maxDiameter, left + right);
    return 1 + Math.max(left, right);
  };
  caculateDepth(root);
  return maxDiameter;
};
