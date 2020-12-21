function reverseWords(s: string): string {
  let arr: string[] = s.split(' ')
  let res: string[] = []

  for (let str of arr) {
    str = str.split('').reverse().join('')
    res.push(str)
  }

  return res.join(' ')
};
