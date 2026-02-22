var decodeString = function (s) {
  const stack = [];
  let k = 0;
  let res = "";
  for (const c of s) {
    if ("a" <= c && c <= "z") {
      res += c;
    } else if ("0" <= c && c <= "9") {
      k = k * 10 + parseInt(c);
    } else if (c === "[") {
      stack.push([res, k]);
      k = 0;
      res = "";
    } else {
      const [pre_res, preK] = stack.pop();
      res = pre_res + res.repeat(preK);
    }
  }
  return res;
};
