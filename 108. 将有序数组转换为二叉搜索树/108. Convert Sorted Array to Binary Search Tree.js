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

// 构建一颗平衡树的条件就是把 一个数组的中间作为根, 然后数组的左边变为左子树, 右边变为右子树, 递归执行相同的操作
//   function 一颗平衡树(left, right){
//       树的根 = 数组的中间值
//       树的左边 = 一颗平衡树(数组的左边)
//       树的右边 = 一颗平衡树(数组的右边)
//   }

var sortedArrayToBST = function (nums) {
  if (!nums.length) {
    return null;
  }

  function createTree(left, right) {
    if (left > right) {
      return null;
    }
    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = createTree(left, mid - 1);
    root.right = createTree(mid + 1, right);
    return root;
  }

  return createTree(0, nums.length - 1);
};
