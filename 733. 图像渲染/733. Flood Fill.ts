function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const m: number = image.length
  const n: number = image[0].length
  const oldColor = image[sr][sc]
  if (oldColor === newColor) return image

  const fill = (i: number, j: number): void => {
    if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] != oldColor) {
      return
    }

    image[i][j] = newColor
    fill(i + 1, j)
    fill(i - 1, j)
    fill(i, j + 1)
    fill(i, j - 1)
  }

  fill(sr, sc)
  return image
};
