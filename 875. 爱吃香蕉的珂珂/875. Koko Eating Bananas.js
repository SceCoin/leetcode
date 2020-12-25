/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    let mid = left + ((right - left) >> 1);

    if (needTime(piles, mid) > H) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

const needTime = (piles, speed) => {
  let times = 0;
  for (let pile of piles) {
    times += Math.ceil(pile / speed);
  }

  return times;
};
