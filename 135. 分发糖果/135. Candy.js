/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // [2,3,4,3,3,2,7]
  //  1 2 3 1 2 1 2
  //  思路:  每个孩子至少有一颗糖果, 先遍历一遍对比左边, 如果当前值大于左边就在左边基础上+1, 再遍历一遍对比右边

  if (ratings.length == 0) {
    return 0;
  }

  const candies = Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
    }
  }

  return candies.reduce((a, b) => a + b, 0);
};
