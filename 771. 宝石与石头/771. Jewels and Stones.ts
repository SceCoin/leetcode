function numJewelsInStones(J: string, S: string): number {
  const jewel: string[] = J.split('')
  let count: number = 0

  for (let i: number = 0; i < S.length; i++) {
    if (jewel.indexOf(S[i]) !== -1 ) {
      count++
    }
  }

  return count
};
