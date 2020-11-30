/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
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
