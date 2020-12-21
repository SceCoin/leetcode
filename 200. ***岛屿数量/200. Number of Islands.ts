function numIslands(grid: string[][]): number {
  let count: number = 0
  for (let i: number = 0; i < grid.length; i++) {
    for (let j: number = 0; j < grid[0].length; j++) {
      if (grid[i][j] == '1') {
        count++
        turnZero(i, j, grid)
      }
    }
  }
  return count
};

function turnZero(i: number, j: number, grid: string[][]): void {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
    return
  }
  grid[i][j] = '0'
  turnZero(i, j + 1, grid)
  turnZero(i, j - 1, grid)
  turnZero(i + 1, j, grid)
  turnZero(i - 1, j, grid)
}
