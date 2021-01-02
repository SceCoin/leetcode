function minWindow(s: string, t: string): string {
  let minLen: number = s.length + 1
  let start: number = s.length
  let map: object = {}
  let missingType: number = 0
  for (let char of t) {
    if (!map[char]) {
      missingType++
      map[char] = 1
    } else {
      map[char]++
    }
  }

  let left: number = 0
  let right: number = 0

  for (; right < s.length; right++) {
    let rightChar: string = s[right]
    if (map[rightChar] !== undefined) {
      map[rightChar]--
    }
    if (map[rightChar] == 0) {
      missingType--
    }

    while (missingType == 0) {
      let leftChar: string = s[left]

      if (right - left + 1 < minLen) {
        minLen = right - left + 1
        start = left
      }

      if (map[leftChar] !== undefined) {
        map[leftChar]++
      }
      if (map[leftChar] > 0) {
        missingType++
      }
      left++
    }
  }

  if (start == s.length) {
    return ""
  }
  return s.substring(start, start + minLen)
};
