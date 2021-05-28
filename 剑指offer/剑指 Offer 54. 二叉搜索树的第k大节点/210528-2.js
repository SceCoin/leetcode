/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
    // 二叉搜索树的中序遍历本身就是排序的数组, 反中序就是从大到小
    let num = 0
    let result = null

    const dfs = (root) => {
      if (root == null) {
        return
      }

      dfs(root.right)
      num++
      if (num == k) {
        result = root.val
        return
      }
      dfs(root.left)
    }

    dfs(root)
    return result
  };
