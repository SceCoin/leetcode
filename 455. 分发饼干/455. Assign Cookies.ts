function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let child: number = 0
  let cookie: number = 0

  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie]) {
      child++
    }
    cookie++
  }

  return child
};
