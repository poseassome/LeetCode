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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    const DFS = node => {
        if(!node) return {depth: 0, head: null};
        let left = DFS(node.left);
        let right = DFS(node.right);
        if(left.depth > right.depth) return {depth: left.depth+1, head: left.head};
        if(left.depth < right.depth) return {depth: right.depth+1, head: right.head};
        return {depth: left.depth+1, head: node};
    }
    
    let res = DFS(root);
    return res.head;
};