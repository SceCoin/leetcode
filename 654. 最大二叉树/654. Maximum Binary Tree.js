/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 思路: 递归解法, 因为是选出数组里最大值作为根, 那么就是将最大值找到, 然后创建一个节点,
// 之后分割数组 为左右, 依次向下递归, 用先序遍历.
// 递归的想法一定是 一个节点该怎么处理, 处理合适再考虑 用什么遍历方式把所有节点都一样处理.

var constructMaximumBinaryTree = function (nums) {
  if (nums.length == 0) {
    return null;
  }

  let maxVal = Math.max(...nums);
  let root = new TreeNode(maxVal);
  root.left = constructMaximumBinaryTree(nums.slice(0, nums.indexOf(maxVal)));
  root.right = constructMaximumBinaryTree(nums.slice(nums.indexOf(maxVal) + 1));

  return root;
};
