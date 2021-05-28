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
    // 二叉树问题都是前中后序遍历问题,
    // 执行中序遍历后将节点值保存在是数组中, 然后进行排序后选出第k大的值
    let arr = []

    const recursion = (root) => {
      if (root == null) {
        return
      }

      recursion(root.left)
      arr.push(root.val)
      recursion(root.right)
    }

    recursion(root)
    arr.sort((a, b) => b - a)
    return arr[k - 1]
  };
