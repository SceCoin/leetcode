function shipWithinDays(weights: number[], D: number): number {
  let left: number = Math.max(...weights)
  let right: number = weights.reduce((a, b) => a + b, 0)

  while (left < right) {
    let mid: number = left + ((right - left) >> 1)

    if (needDay(weights, mid) > D) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
};

const needDay = (weights: number[], cap: number): number => {
  let day: number = 1
  let sum: number = 0

  for (let w of weights) {
    if (sum + w <= cap) {
      sum += w
    } else {
      sum = w
      day++
    }
  }

  return day
}
