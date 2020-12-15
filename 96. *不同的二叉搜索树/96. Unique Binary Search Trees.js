/**
 * @param {number} n
 * @return {number}
 */

// 思路: 如果整数 1 - n 中的 k 作为根节点值，则 1 - k-1 会去构建左子树，k+1 - n 会去构建右子树。
//      左子树出来的形态有 a 种，右子树出来的形态有 b 种，则整个树的形态有 a * b 种。
//      以 kk 为根节点的 BST 种类数 = 左子树 BST 种类数 * 右子树 BST 种类数

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
