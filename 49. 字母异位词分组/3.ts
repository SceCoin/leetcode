function groupAnagrams(strs: string[]): string[][] {
  const map = new Map()

  for (let i: number = 0; i < strs.length; i++) {
    const sortStr = strs[i].split('').sort().join('')

    if (map.has(sortStr)) {
      map.get(sortStr).push(strs[i])
    } else {
      map.set(sortStr, [strs[i]])
    }
  }

  return [...map.values()]
};
