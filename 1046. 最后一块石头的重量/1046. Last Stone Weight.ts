function lastStoneWeight(stones: number[]): number {
  while (stones.length >= 2) {
    stones.sort((a, b) =>  a - b)
    let temp: number = stones.pop() - stones.pop()
    temp && stones.push(temp)
  }

  return stones.length ? stones[0] : 0
};
