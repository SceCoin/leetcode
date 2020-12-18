function frequencySort(s: string): string {
  const map = new Map();

  for (let c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + c);
    } else {
      map.set(c, c);
    }
  }

  return [...map.values()].sort((a, b) => b.length - a.length).join("");
}
