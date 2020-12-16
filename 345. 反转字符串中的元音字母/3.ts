function reverseVowels(s: string): string {
  const vowel: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let arrS: string[] = s.split('')
  let j: number = arrS.length - 1

  for (let i: number = 0; i < j; i++) {
    if (vowel.indexOf(arrS[i]) != -1) {
      while (vowel.indexOf(arrS[j]) == -1) {
        j--
      }

      [arrS[i], arrS[j]] = [arrS[j], arrS[i]]
      j--
    }
  }

  return arrS.join('')

};
