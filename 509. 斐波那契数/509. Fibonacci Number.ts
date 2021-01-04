function fib(n: number): number {
  const list: number[] = [0, 1]

  const fi = (n: number): number => {
    if (n == 0) {
      return 0
    }

    if (n == 1) {
      return 1
    }

    if (list[n]) {
      return list[n]
    }

    if (n >= 2) {
      list[n] = fi(n - 1) + fi(n - 2)
      return list[n]
    }
  }

  return fi(n)
};
