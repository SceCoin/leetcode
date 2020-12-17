function numTrees(n: number): number {
  const memo = new Array(n + 1)

  const recursion = (n: number): number => {
    if (n == 0 || n == 1) {
      return 1
    }

    if (memo[n]) {
      return memo[n]
    }

    let count: number = 0
    for (let i: number = 0; i <= n - 1; i++) {
      count += recursion(i) * recursion(n - i - 1)
    }

    memo[n] = count

    return count
  }

  return recursion(n)
};
