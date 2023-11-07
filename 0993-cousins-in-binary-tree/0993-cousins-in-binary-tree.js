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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const DFS = (node, val, depth) => {
        if(!node) return null;
        if(node.val === val) return {node, depth};
        if(node.left) node.left.parent = node;
        if(node.right) node.right.parent = node;
        return DFS(node.left, val, depth+1) || DFS(node.right, val, depth+1);
    }
    const left = DFS(root, x, 0);
    const right = DFS(root, y, 0);
    return left.depth === right.depth && left.node.parent !== right.node.parent;
};