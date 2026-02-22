var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (i >= c) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
