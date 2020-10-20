/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// 合并树, 把树合并到t1上.
// 如果t1节点为空, t2节点不为空, 那么节点更新为t2
// 如果t1节点为空, t2节点为空, 那么节点不变, 就是t1空节点或者t1不为空,t2为空, 也是节点不变
// 如果节点都存在, 那么进行加值操作后递归继续进行.

// 合并时同时遍历两棵树, 然后只在t1树上操作, 如果把MergeTrees当成递归函数, 那么t1,t2实际指的是节点,
// 所以判断的是节点
var mergeTrees = function (t1, t2) {
  if (t1 == null && t2) {
    return t2;
  }
  if ((t1 && t2 === null) || (t1 === null && t2 === null)) {
    return t1;
  }

  t1.val = t1.val + t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
};
