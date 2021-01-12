/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") == word2.join("");
};

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  // 思路: 直接合并字符串然后判断相等就可以了
  let str1 = "";
  let str2 = "";

  for (let word of word1) {
    str1 += word;
  }

  for (let word of word2) {
    str2 += word;
  }

  if (str1 == str2) {
    return true;
  } else {
    return false;
  }
};
