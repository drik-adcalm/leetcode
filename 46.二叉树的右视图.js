var rightSideView = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const currSize = queue.length;
    for (let i = 0; i < currSize; i++) {
      const node = queue.shift();
      if (i === currSize - 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};
 