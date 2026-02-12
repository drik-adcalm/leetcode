var flatten = function (root) {
  if (!root) return;
  flatten(root.left);
  flatten(root.right);
  const temp = root.right;
  root.right = root.left;
  root.left = null;
  let current = root;
  while (current.right) {
    current = current.right;
  }
  current.right = temp;
};


var flatten = function (root) {
  let head = null;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.right);
    dfs(node.left);
    node.left = null;
    node.right = head;
    head = node;
  };
  dfs(root);
};