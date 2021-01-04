function groupAnagrams(strs: string[]): string[][] {
  const map = new Map()

  for (let i: number = 0; i < strs.length; i++) {
    let str = strs[i].split('').sort().join()

    if(map.has(str)) {
      let temp = map.get(str)
      temp.push(strs[i])
      map.set(str, temp)
    } else {
      map.set(str, [strs[i]])
    }
  }

  return [...map.values()]
};
