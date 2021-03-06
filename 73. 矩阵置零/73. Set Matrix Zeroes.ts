/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let isR: number = 0
  let isC: number = 0

  for (let  i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        if (i == 0) {
          isR = 1
        }
        if (j == 0) {
          isC = 1
        }
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  for (let i: number = 1; i < matrix.length; i++) {
    for (let j: number = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0
      }
    }
  }

  if (isR) {
    for (let j: number = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0
    }
  }

  if (isC) {
    for (let i: number = 0; i < matrix.length; i++) {
      matrix[i][0] = 0
    }
  }
};
