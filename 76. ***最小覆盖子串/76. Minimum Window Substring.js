/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 思路: 滑动窗口, 双指针
  let minLen = s.length + 1;
  let start = s.length;
  let map = {};
  let missingType = 0;
  for (let char of t) {
    if (!map[char]) {
      missingType++;
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  let left = 0;
  let right = 0;
  for (; right < s.length; right++) {
    let rightChar = s[right];
    if (map[rightChar] !== undefined) {
      map[rightChar]--;
    }
    if (map[rightChar] == 0) {
      missingType--;
    }
    while (missingType == 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }
      let leftChar = s[left];
      if (map[leftChar] !== undefined) {
        map[leftChar]++;
      }
      if (map[leftChar] > 0) {
        missingType++;
      }
      left++;
    }
  }

  if (start == s.length) return "";
  return s.substring(start, start + minLen);
};
