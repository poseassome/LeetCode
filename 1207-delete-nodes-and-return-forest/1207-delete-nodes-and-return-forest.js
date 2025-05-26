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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let res = [];
    const deletenode = (root) => {
        if(!root) return root;
        root.left = deletenode(root.left);
        root.right = deletenode(root.right);
        if(to_delete.includes(root.val)){
            if(root.left) res.push(root.left);
            if(root.right) res.push(root.right);
            return null;
        }
        return root;
    }
    const newroot = deletenode(root);
    if(newroot) res.push(newroot);
    return res;
};