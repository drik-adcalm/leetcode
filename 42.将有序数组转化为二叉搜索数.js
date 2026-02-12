var sortedArrayToBST = function (nums) {
  const buildBinarySearchTree = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = buildBinarySearchTree(left, mid - 1);
    node.right = buildBinarySearchTree(mid + 1, right);
    return node;
  };

  return buildBinarySearchTree(0, nums.length - 1);
};
