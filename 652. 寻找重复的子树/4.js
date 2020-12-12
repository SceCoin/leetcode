var findDuplicateSubtrees = function (root) {
  // 思路: 需要先序列化二叉树, 让它变成字符串, 然后才可以进行比较是否重复, 用map来保存字符串

  // 1. 初始化
  let res = [];
  let map = new Map();

  // 3. 先执行序列化, 然后保存在map中, 当map里取到值为2, 说明出现了重复字符串, 保存到结果集里
  const recursion = (root) => {
    if (root == null) {
      return "#";
    }

    let stringTree =
      root.val + "#" + recursion(root.left) + "#" + recursion(root.right);

    if (!map.get(stringTree)) {
      map.set(stringTree, 1);
    } else {
      map.set(stringTree, map.get(stringTree) + 1);
    }

    if (map.get(stringTree) == 2) {
      res.push(root);
    }

    return stringTree;
  };

  // 2. 进入递归返回结果
  recursion(root);
  return res;
};
