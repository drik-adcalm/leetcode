var combinationSum = function (candidates, target) {
  const result = [];
  const sortCandidate = [...candidates].sort((a, b) => a - b);
  const aim = target;
  const path = [];
  const backtrack = (start, sum) => {
    if (sum === aim) {
      result.push(path.slice());
      return;
    }
    if (sum > aim) {
      return;
    }
    for (let i = start; i < sortCandidate.length; i++) {
      const num = sortCandidate[i];
      if (num > aim - sum) {
        break;
      }
      path.push(num);
      backtrack(i, num + sum);
      path.pop();
    }
  };
  backtrack(0, 0);
  return result;
};
