function numSquares(n: number): number {
  let res: number = 0
  let queue: number[] = [n]
  let visited = new Set()

  while (queue.length) {
    const len = queue.length
    res++

    for (let i = 0; i < len; i++) {
      const curr = queue.shift()
      for (let j = 1; j * j <= curr; j++) {
        const k = curr - j * j
        if (k === 0) return res
        if (visited.has(k)) {
          continue
        }

        visited.add(k)
        queue.push(k)
      }
    }
  }

  return res

};
