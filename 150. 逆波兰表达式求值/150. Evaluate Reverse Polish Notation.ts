function evalRPN(tokens: string[]): number {
  const SIGN: object = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b | 0
  }

  const stack = []
  tokens.forEach(item => {
    if (item in SIGN) {
      const b = stack.pop()
      const a = stack.pop()
      const res = SIGN[item](a, b)
      stack.push(res)
    } else {
      stack.push(+item)
    }
  })

  return stack.pop()
};
