function frequencySort(s: string): string {
  const map = new Map()

  for (let c of s) {
    if (map.has(c)) {
      map.set(c, c + map.get(c))
    } else {
      map.set(c, c)
    }
  }

  return Array.from(map.values()).sort((a, b) => b.length - a.length).join('')
};
