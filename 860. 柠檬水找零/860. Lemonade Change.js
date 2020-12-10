/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;
  let len = bills.length;

  for (let i = 0; i < len; i++) {
    if (bills[i] == 5) {
      five++;
    }

    if (bills[i] == 10) {
      if (five == 0) {
        return false;
      }
      five--;
      ten++;
    }

    if (bills[i] == 20) {
      if (five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five = five - 3;
      } else {
        return false;
      }
    }
  }

  return true;
};
