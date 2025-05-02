# Tree Breadth First Search

### 1. Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
Leetcode link = https://leetcode.com/problems/binary-tree-level-order-traversal/description/

My Raw solution - 

```
   function levelOrder(root) {
    if (!root) {
        return []
    }
    let queue = [root];
    let result = [[root.val]];
    while (queue.length !== 0) {
        let level = [];
        let c = queue.length
        for (let i = 0; i < c; i++) {
            let val = queue.shift();
            if (val?.left) {
                queue.push(val.left)
                level.push(val.left.val)
            }
            if (val?.right) {
                queue.push(val.right)
                level.push(val.right.val)
            }
        }
        if (level.length) {
            result.push(level)
        }
    }
    return result
}
```
