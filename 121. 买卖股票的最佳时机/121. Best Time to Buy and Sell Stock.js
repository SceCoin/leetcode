/**
 * @param {number[]} prices
 * @return {number}
 */

// 最简单思路: 只要提取当天买入, 然后计算之后的天数里卖出的差值, 取最大值保存在结果里, 再输出就可以了,
// 但时间复杂度是 O(n2)
var maxProfit2 = function (prices) {
  let res = 0;

  for (let i = 0; i < prices.length; i++) {
    let buy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let sold = prices[j];

      res = Math.max(res, sold - buy);
    }
  }

  return res;
};

// 思路2: 动态规划.   因为只有一次购买购入的时机, 而且只能在之后卖入.
// 所以需要寻找最小的购买时机, 然后用当前价格-最小购买时机的价格, 保存在结果里, 等结果循环完. 就有最大卖出-最小买入

const maxProfit = function (prices) {
  let res = 0;
  let minBuyTime = prices[0];
  for (let i = 1; i < prices.length; i++) {
    minBuyTime = Math.min(minBuyTime, prices[i]);
    res = Math.max(res, prices[i] - minBuyTime);
  }

  return res;
};
