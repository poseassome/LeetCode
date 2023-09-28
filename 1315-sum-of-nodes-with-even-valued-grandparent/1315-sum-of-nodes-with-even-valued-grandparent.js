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
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    let sum = 0;
    const DFS = (node, parent, grandparent) => {
        if(!node) return 0;
        if(grandparent && grandparent.val%2 === 0) sum += node.val;
        DFS(node.left, node, parent);
        DFS(node.right, node, parent);
    }
    DFS(root);
    return sum;
};