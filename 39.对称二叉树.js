var isSymmetric = function (root) {
  const isMirror = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  };
  return isMirror(root.left, root.right);
};


var isSymmetric = function (root) {
  const queue = [root.left, root.right];

  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }
  return true;
};