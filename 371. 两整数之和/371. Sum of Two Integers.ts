function getSum(a: number, b: number): number {
  return add(a, b)
};

const add = (a: number, b: number): number => {
  return b === 0 ? a: add(a ^ b, (a & b) << 1)
}
