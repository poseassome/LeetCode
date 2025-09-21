/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const DFS = (left, right) => {
        if(left > right) return null;
        let val = preorder.shift();
        let root = new TreeNode(val);
        let idx = map.get(val);
        root.left = DFS(left, idx-1);
        root.right = DFS(idx+1, right);
        return root;
    }
    let map = new Map();
    for(let i=0; i<inorder.length; i++){
        map.set(inorder[i], i);
    }
    return DFS(0, inorder.length-1);
};