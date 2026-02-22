var dailyTemperatures = function (temperatures) {
  const stack = [];
  const res = Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i];
    while (stack.length > 0 && t > temperatures[stack[stack.length - 1]]) {
      const top = stack.pop();
      res[top] = i - top;
    }

    stack.push(i);
  }
  return res;
};
