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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root) return false;
    if(structure(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

const structure = (root, sub) => {
    if(root && !sub) return false;
    if(!root && sub) return false;
    if(!root && !sub) return true;
    return (root.val === sub.val) && (structure(root.left, sub.left) && structure(root.right, sub.right));
}