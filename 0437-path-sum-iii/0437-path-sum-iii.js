/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const map = new Map();
    map.set(0, 1);
    const DFS = (node, curSum) => {
        if(!node )return 0;
        curSum += node.val;
        let pathEnd = map.get(curSum-targetSum) || 0;
        map.set(curSum, (map.get(curSum) || 0) + 1);
        pathEnd += DFS(node.left, curSum);
        pathEnd += DFS(node.right, curSum);
        map.set(curSum, map.get(curSum) - 1);
        return pathEnd;
    }
    return DFS(root, 0);
};