/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 思路: 只要股票上涨, 上涨的部分就是利润
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};
