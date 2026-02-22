var largestRectangleArea = function (heights) {
  const newHeights = [0, ...heights, 0];
  const stack = [];
  let maxArea = 0;
  for (let i = 0; i < newHeights.length; i++) {
    while (
      stack.length > 0 &&
      newHeights[i] < newHeights[stack[stack.length - 1]]
    ) {
      const topIndex = stack.pop();
      const height = newHeights[topIndex];
      const width = i - stack[stack.length - 1] - 1;
      const currentArea = width * height;
      maxArea = Math.max(maxArea, currentArea);
    }
    stack.push(i);
  }
  return maxArea;
};
