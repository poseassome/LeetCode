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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    const DFS = (root, val, depth, currentDepth) => {
        if(!root) return;
        if(currentDepth+1 === depth){
            root.left = new TreeNode(val, root.left, null);
            root.right = new TreeNode(val, null, root.right);
        }
        DFS(root.left, val, depth, currentDepth+1);
        DFS(root.right, val, depth, currentDepth+1);
    }
    
    if(depth === 1) return new TreeNode(val, root, null);
    DFS(root, val, depth, 1);
    return root;
};