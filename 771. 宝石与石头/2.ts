function numJewelsInStones(J: string, S: string): number {
  const jewel = new Set()
  let res = 0

  for (let j of J) {
    jewel.add(j)
  }

  for (let s of S) {
    if (jewel.has(s)) {
      res++
    }
  }

  return res
};
