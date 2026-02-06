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
var subtreeWithAllDeepest = function(root) {
    let height = 0;
    let maxNode = null;
    
    const DFS = (node, currDepth) => {
        if(!node) return currDepth-1;
        
        height = Math.max(height, currDepth);
        const leftDepth = DFS(node.left, currDepth+1);
        const rightDepth = DFS(node.right, currDepth+1);
        
        if(leftDepth === height && rightDepth === height) maxNode = node;      
        return Math.max(leftDepth, rightDepth);
    }
     
    DFS(root, 0);
    return maxNode;
};