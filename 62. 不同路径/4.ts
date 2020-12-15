function uniquePaths(m: number, n: number): number {
  const dp: number[][] = new Array(m).fill(new Array(n).fill(1))

  for (let i: number = 1; i < m; i++) {
    for (let j: number = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
};
