/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
    // 二叉树一定是跟遍历相关, 不论是前中后序,
    // 镜像翻转说明就是一棵树的左右节点互换, 每一层都是如此

    if (root == null) {
      return root
    }

    let temp = root.left
    root.left = root.right
    root.right = temp

    mirrorTree(root.left)
    mirrorTree(root.right)

    return root
  };
