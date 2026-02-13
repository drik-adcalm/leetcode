// 数字与字母的映射表（电话按键）
const MAPPING = [
  "", // 0 -> 无字母
  "", // 1 -> 无字母
  "abc", // 2 -> a,b,c
  "def", // 3 -> d,e,f
  "ghi", // 4 -> g,h,i
  "jkl", // 5 -> j,k,l
  "mno", // 6 -> m,n,o
  "pqrs", // 7 -> p,q,r,s
  "tuv", // 8 -> t,u,v
  "wxyz", // 9 -> w,x,y,z
];
var letterCombinations = function (digits) {
  const result = [];
  const path = [];
  const backtrack = (i) => {
    if (i === digits.length) {
      result.push(path.join(""));
      return;
    }
    const letters = MAPPING[Number(digits[i])];
    for (const c of letters) {
      path[i] = c;
      backtrack(i + 1);
    }
  };
  backtrack(0);
  return result;
};
