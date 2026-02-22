var searchMatrix = function (matrix, target) {
  let left = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  let right = m * n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const x = matrix[Math.floor(mid / n)][mid % n];
    if (x === target) {
      return true;
    } else if (x > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
