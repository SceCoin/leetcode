/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 思路: 哈希表 Key 保存 元素, value保存次数.  然后用桶排序,  数组下标为次数, 数组元素为 相同次数元素的数组
  let map = new Map();
  nums.map((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  if (map.size <= k) {
    return [...map.keys()];
  }

  return bucketSort(map, k);
};

const bucketSort = (map, k) => {
  let arr = [];
  let res = [];
  map.forEach((value, key) => {
    if (!arr[value]) {
      arr[value] = [key];
    } else {
      arr[value].push(key);
    }
  });

  for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
    if (arr[i]) {
      res.push(...arr[i]);
    }
  }

  return res;
};
