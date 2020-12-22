function decodeString(s: string): string {
  const numStack: number[] = []
  const strStack: string[] = []
  let num = 0
  let res = ''

  for (const char of s) {
    if (!isNaN(Number(char))) {
      num = num * 10 + Number(char)
    } else if (char == '[') {
      strStack.push(res)
      res = ''
      numStack.push(num)
      num = 0
    } else if (char == ']') {
      let repeatTimes: number = numStack.pop()
      res = strStack.pop() + res.repeat(repeatTimes)
    } else {
      res += char
    }
  }

  return res
};
