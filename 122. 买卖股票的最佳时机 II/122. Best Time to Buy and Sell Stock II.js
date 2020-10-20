/**
 * @param {number[]} prices
 * @return {number}
 */

// 只要股票价格上涨，上涨的部分就是我的利润，可以理解为上涨期间第一天买入，然后一直买入又卖出, 中间获得的利润就是相当于从第一个买入到最后一天卖出的利润
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};
