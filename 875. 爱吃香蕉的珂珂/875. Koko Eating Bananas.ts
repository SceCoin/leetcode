function minEatingSpeed(piles: number[], H: number): number {
  let left: number = 1
  let right: number = Math.max(...piles)

  while (left < right) {
    let mid: number = left + ((right - left) >> 1)

    if (needHour(piles, mid) > H) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
};

const needHour = (piles: number[], speed: number): number => {
  let times: number = 0

  for (let pile of piles)  {
    times += Math.ceil(pile / speed)
  }

  return times
}
