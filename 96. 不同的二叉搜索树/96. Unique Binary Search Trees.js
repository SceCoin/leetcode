/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let memo = new Array(n + 1);

  const recursion = (n) => {
    if (n == 0 || n == 1) {
      return 1;
    }

    if (memo[n]) {
      return memo[n];
    }

    let count = 0;
    for (let i = 0; i <= n - 1; i++) {
      count += recursion(i) * recursion(n - i - 1);
    }

    memo[n] = count;

    return count;
  };

  return recursion(n);
};

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i - 1; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }

  return dp[n];
};
