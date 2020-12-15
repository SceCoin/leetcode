function uniquePaths(m: number, n: number): number {
  let dp = new Array(m).fill(new Array(n).fill(1))

  for (let i: number = 1; i < m; i++) {
    for (let j: number = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
    }
  }

  return dp[m - 1][n - 1]
};
