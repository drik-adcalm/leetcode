var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    let currSize = queue.length;
    let current = [];
    for (let i = 0; i < currSize; i++) {
      const node = queue.shift();
      current.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(current);
  }
  return result;
};
