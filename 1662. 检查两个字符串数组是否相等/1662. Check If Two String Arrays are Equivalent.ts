function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let str1: string = word1.reduce((prev, curr) => prev += curr)
  let str2: string = word2.reduce((prev, curr) => prev += curr)

  return str1 == str2 ? true : false
};
