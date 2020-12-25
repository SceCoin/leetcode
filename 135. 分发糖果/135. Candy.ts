function candy(ratings: number[]): number {
  if (ratings.length == 0) {
    return 0
  }

  const candies: number[] = Array(ratings.length).fill(1)

  for (let i: number = 0; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  }

  for (let i: number = ratings.length - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1
    }
  }

  return candies.reduce((a, b) => a + b, 0)
};
