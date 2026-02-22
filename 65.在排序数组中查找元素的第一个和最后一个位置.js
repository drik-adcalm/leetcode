var searchRange = function (nums, target) {
  let ans = [-1, -1];
  const searchBinary = (nums, target, lower) => {
    let left = 0;
    let right = nums.length - 1;
    let ans = nums.length;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1;
        ans = mid;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  };
  const leftIdx = searchBinary(nums, target, true);
  const rightIdx = searchBinary(nums, target, false) - 1;
  if (leftIdx <= rightIdx) {
    ans = [leftIdx, rightIdx];
  }
  return ans;
};
