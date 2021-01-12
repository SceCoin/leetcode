/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  if (n == 0) {
    return 0;
  }

  let dp_i_1_0 = 0;
  let dp_i_1_1 = -Infinity;
  let dp_i_2_0 = 0;
  let dp_i_2_1 = -Infinity;

  for (let i = 0; i < n; i++) {
    dp_i_1_0 = Math.max(dp_i_1_0, dp_i_1_1 + prices[i]);
    dp_i_1_1 = Math.max(dp_i_1_1, 0 - prices[i]);
    dp_i_2_0 = Math.max(dp_i_2_0, dp_i_2_1 + prices[i]);
    dp_i_2_1 = Math.max(dp_i_2_1, dp_i_1_0 - prices[i]);
  }
  return dp_i_2_0;
};
