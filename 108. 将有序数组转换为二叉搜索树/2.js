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
var sortedArrayToBST = function (nums) {
  const createTree = (nums, left, right) => {
    if (left > right) {
      return null;
    }

    const mid = left + ((right - left) >> 1);
    const root = new TreeNode(nums[mid]);

    root.left = createTree(nums, left, mid - 1);
    root.right = createTree(nums, mid + 1, right);

    return root;
  };

  return createTree(nums, 0, nums.length - 1);
};
