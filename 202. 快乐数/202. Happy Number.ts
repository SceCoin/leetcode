function isHappy(n: number): boolean {
  const set: any = new Set()

  while (!set.has(n)) {
    set.add(n)

    let sum: number = 0

    while(n != 0) {
      const num: number = n % 10
      sum += num * num
      n = Math.floor(n / 10)
    }
    if (sum == 1) {
      return true
    }
    n = sum
  }

  return false
};
