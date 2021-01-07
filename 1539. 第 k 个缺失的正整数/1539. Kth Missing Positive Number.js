/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const list = new Array(arr.length + k).fill(0);

  for (let i = 0; i < list.length; i++) {
    list[i] = i + 1;
  }

  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (arr.indexOf(i + 1) == -1) {
      count++;
    }

    if (count == k) {
      return list[i];
    }
  }
};
