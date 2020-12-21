/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n: number = matrix.length

  for (let i: number = 0; i < n; i++) {
    for (let j: number = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }

  matrix.forEach(row => row.reverse())
};
