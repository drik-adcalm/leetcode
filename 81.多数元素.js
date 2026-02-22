var majorityElement = function (nums) {
  const map = new Map();
  const half = nums.length / 2;
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > half) return num;
  }
};
// 擂台法
var majorityElement = function (nums) {
  let ans = 0,
    hp = 0;
  for (const x of nums) {
    if (hp === 0) {
      ans = x;
      hp = 1;
    } else {
      hp += x === ans ? 1 : -1;
    }
  }
  return ans;
};