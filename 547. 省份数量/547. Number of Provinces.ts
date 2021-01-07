function findCircleNum(M: number[][]): number {
  let n: number = M.length // n 是总节点数
  if (n == 0) {
    return 0
  }
  let count: number = 0

  let dfs = (i: number): void => {
    for (let j: number = 0; j < n; j++) {
      if (M[i][j] == 1 && !visited[j]) {
        visited[j] = true
        dfs(j)
      }
    }
  }

  let visited: object = {}
  for (let i: number = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
      count++
    }
  }
  return count
};
