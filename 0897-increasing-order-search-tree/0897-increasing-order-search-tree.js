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
var increasingBST = function(root) {
    let nodes = [];
    function DFS(node){
        if(node !== null){
            DFS(node.left);
            nodes.push(node.val);
            DFS(node.right);
        }
    }
    DFS(root);
    
    let treenode = new TreeNode(0);
    let current = treenode;
    for(let i=0; i<nodes.length; i++){
        current.right = new TreeNode(nodes[i]);
        current = current.right;
    }
    return treenode.right;
};