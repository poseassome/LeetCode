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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    const findMin = node => {
        while(node.left) {
            node = node.left;
        }
        return node;
    }
    
    if(!root) return null;
    if(key > root.val) root.right = deleteNode(root.right, key);
    else if(key < root.val) root.left = deleteNode(root.left, key);
    else {
        if(!root.right) return root.left;
        if(!root.left) return root.right;
        let cur = findMin(root.right);
        root.val = cur.val;
        root.right = deleteNode(root.right, cur.val);
    }
    return root;
};