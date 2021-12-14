/*
 * @Author: your name
 * @Date: 2021-12-14 10:19:34
 * @LastEditTime: 2021-12-14 10:19:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /leetcode/704. 二分查找/20211214.js
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return mid;
      }

      if (nums[mid] < target) {
        left = mid + 1;
      }

      if (nums[mid] > target) {
        right = mid - 1;
      }
    }

    return -1;
  };
