function isHappy(n: number): boolean {
  const mySet: any = new Set()

  while (!mySet.has(n)) {
    mySet.add(n)
    let sum: number = 0

    while (n) {
      const val: number = n % 10
      sum += val ** 2
      n = Math.floor(n / 10)
    }

    if (sum == 1) {
      return true
    }

    n = sum
  }

  return false
};
