/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let res = [];
    let parents = new Map();

    const setParents = (node, parent) => {
        if(!node) return;
        parent && parents.set(node, parent);
        setParents(node.left, node);
        setParents(node.right, node);
    }

    setParents(root, null);

    const DFS = (node, distance, visited) => {
        if(!node || visited.has(node)) return;
        if(distance === k){
            res.push(node.val);
            return;
        }

        visited.add(node);

        DFS(node.left, distance+1, visited)
        DFS(node.right, distance+1, visited)
        DFS(parents.get(node), distance+1, visited)
    }

    DFS(target, 0, new Set());
    return res;
};