function findRedundantConnection(edges: number[][]): number[] {
  function findAncestor(e) {
    while (union[e] != e) {
      e = union[e]
    }

    return e
  }

  let n: number = -Infinity
  edges.forEach(([e1, e2]) => n = Math.max(n, e1, e2))

  let union: number[] = new Array(n + 1)
  for (let i: number = 0; i < n; i++) {
    union[i] = i
  }

  for (let i: number = 0; i < edges.length; i++) {
    let branch1 = findAncestor(edges[i][0])
    let branch2 = findAncestor(edges[i][1])

    if (branch1 == branch2) return edges[i]

    union[branch1] = union[branch2]
  }
};
