/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    // 深度相当于高度, 递归

    const recursion = (root) => {
      if (root == null) {
        return 0
      }

      let left = recursion(root.left)
      let right = recursion(root.right)

      return Math.max(left, right) + 1
    }

    return recursion(root)
  };
