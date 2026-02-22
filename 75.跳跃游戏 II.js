var jump = function (nums) {
  let ans = 0;
  let currentRight = 0;
  let nextRight = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextRight = Math.max(nextRight, i + nums[i]);
    if (i === currentRight) {
      ans++;
      currentRight = nextRight;
    }
  }
  return ans;
};
