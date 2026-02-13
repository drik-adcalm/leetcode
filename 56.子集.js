var subsets = function (nums) {
  const result = [];
  const path = [];
  const brackTack = (i) => {
    if (i === nums.length) {
      result.push([...path]);
      return;
    }
    brackTack(i + 1);

    path.push(nums[i]);
    brackTack(i + 1);
    path.pop();
  };

  brackTack(0);
  return result;
};
