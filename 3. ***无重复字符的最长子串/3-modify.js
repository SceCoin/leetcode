/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 思路: 使用队列来保存最长子串, 遍历一遍字符串, 如果字符不在队列中, 加入队列, 如果出现重复字符, 就把重复之前的都出列

  let max = 0;
  let deque = [];

  for (let i = 0; i < s.length; i++) {
    let index = deque.indexOf(s[i]);
    if (index != -1) {
      deque.splice(0, index + 1);
    }

    deque.push(s[i]);
    max = Math.max(max, deque.length);
  }

  return max;
};
