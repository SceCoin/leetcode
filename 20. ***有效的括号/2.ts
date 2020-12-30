function isValid(s: string): boolean {
  const stack: string[] = []

  for (let i: number = 0; i < s.length; i++) {
    if (s[i] == '(') {
      stack.push(')')
      continue
    }

    if (s[i] == '[') {
      stack.push(']')
      continue
    }

    if (s[i] == '{') {
      stack.push('}')
      continue
    }

    if (s[i] != stack.pop()) {
      return false
    }
  }

  return stack.length == 0
};
