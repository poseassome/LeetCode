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
var goodNodes = function(root) {
    if(!root) return 0;
    let cnt = 0;

    const traverse = (node, maxSoFar) => {
        if(!node) return;
        if(node.val >= maxSoFar) cnt++;
        const newMax = Math.max(maxSoFar, node.val);
        traverse(node.left, newMax);
        traverse(node.right, newMax);
    }
    
    traverse(root, root.val);
    return cnt;
};