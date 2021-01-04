function trailingZeroes(n: number): number {
  let total: number = 0
  while (n >= 5) {
    total += n / 5 | 0
    n = n / 5
  }

  return total
};
