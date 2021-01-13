/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  // 思路: 并查集

  // 查找该节点的代表节点
  function findAncestor(e) {
    while (union[e] != e) {
      e = union[e];
    }
    return e;
  }

  // 查找节点个数
  let n = -Infinity;
  edges.forEach(([e1, e2]) => (n = Math.max(n, e1, e2)));

  // 并查集初始化
  let union = new Array(n + 1);
  for (let i = 0; i < n; i++) {
    union[i] = i;
  }

  for (let i = 0; i < edges.length; i++) {
    // 找个各自节点的代表节点
    let branch1 = findAncestor(edges[i][0]);
    let branch2 = findAncestor(edges[i][1]);

    // 如果代表节点相同则出现环
    if (branch1 == branch2) return edges[i];

    // 否则令一个端点的代表节点为另一个端点的代表节点
    union[branch1] = union[branch2];
  }
};
