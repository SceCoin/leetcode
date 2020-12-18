function findRestaurant(list1: string[], list2: string[]): string[] {
  const map: object = {}

  for (let i: number = 0; i < list1.length; i++) {
    const index: number = list2.indexOf(list1[i])
    if (index != -1) {
      const num: number = index + i

      if (map[num]) {
        map[num].push(list1[i])
      } else {
        map[num] = [list1[i]]
      }
    }
  }

  // const min: number = Math.min(...Object.keys(map))
  let min: number = Infinity
  for (let key of Object.keys(map)) {
    min = Math.min(min, Number(key))
  }

  return map[min]
};
