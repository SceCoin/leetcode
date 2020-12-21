function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map()

  nums.map((num) => {
    if(map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  })

  if (map.size <= k) {
    return [...map.keys()]
  }

  return bucketSort(map, k)
};

function bucketSort(map: any, k: number): number[] {
  const res: number[] = []
  const arr: any[] = []

  map.forEach((value, key) => {
    if (!arr[value]) {
      arr[value] = [key]
    } else {
      arr[value].push(key)
    }
  })

  for (let i: number = arr.length - 1; i >= 0 && res.length < k; i--) {
    if (arr[i]) {
      res.push(...arr[i])
    }
  }

  return res
}
